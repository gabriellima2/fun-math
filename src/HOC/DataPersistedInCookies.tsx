import { useEffect, useState } from "react";
import * as nookies from "nookies";

import { CookiesDialog } from "@components/CookiesDialog";

import type { ComponentType, WithChildren } from "@globalTypes";

export interface DataPersistedInCookiesProps extends WithChildren {
	cookies: {
		name: string;
		defaultValue: string;
		showDialog: boolean;
	};
}

export interface InjectedPersistedDataProps {
	injectedProps: {
		currentValueCookies: string;
	} | null;
}

export function DataPersistedInCookies<P extends InjectedPersistedDataProps>(
	Component: ComponentType<P>
) {
	return function HighOrder(props: P & DataPersistedInCookiesProps) {
		const [currentValueCookies, setCurrentValueCookies] = useState<
			null | string
		>(null);

		const { cookies } = props;

		const { [cookies.name]: valuePersisted } = nookies.parseCookies();

		// Usuário escolher se quer usar os dados armazenados ou começar novamente.
		const handlePersistedData = (continueWithPersistedData: boolean) => {
			if (continueWithPersistedData)
				return setCurrentValueCookies(valuePersisted);

			nookies.destroyCookie(null, cookies.name);
			nookies.setCookie(null, cookies.name, cookies.defaultValue);

			return setCurrentValueCookies(cookies.defaultValue);
		};

		// Caso não tenha valor nos Cookies adiciona o valor padrão ao estado.
		useEffect(() => {
			if (valuePersisted) return;

			setCurrentValueCookies(cookies.defaultValue);
		}, []);

		if (!currentValueCookies && cookies.showDialog)
			return <CookiesDialog handlePersistedData={handlePersistedData} />;

		return (
			<Component {...(props as P)} injectedProps={{ currentValueCookies }} />
		);
	};
}
