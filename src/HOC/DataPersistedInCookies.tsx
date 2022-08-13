import { useEffect, useState } from "react";
import * as nookies from "nookies";

import { CookiesDialog } from "../components/CookiesDialog";

import { ComponentType, WithChildren } from "../types";

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
	return function HighOrder({
		cookies,
		...props
	}: P & DataPersistedInCookiesProps) {
		const [currentValueCookies, setCurrentValueCookies] = useState<
			null | string
		>(null);

		const { [cookies.name]: persistedExerciseID } = nookies.parseCookies();

		// Usuário escolher se quer usar os dados armazenados ou começar novamente.
		const handlePersistedData = (continueWithPersistedData: boolean) => {
			if (continueWithPersistedData)
				return setCurrentValueCookies(persistedExerciseID);

			return setCurrentValueCookies(cookies.defaultValue);
		};

		// Caso não tenha valor nos Cookies adiciona o valor padrão ao estado.
		useEffect(() => {
			if (persistedExerciseID) return;

			setCurrentValueCookies(cookies.defaultValue);
		}, []);

		if (!currentValueCookies && cookies.showDialog)
			return <CookiesDialog handlePersistedData={handlePersistedData} />;

		return (
			<Component {...(props as P)} injectedProps={{ currentValueCookies }} />
		);
	};
}
