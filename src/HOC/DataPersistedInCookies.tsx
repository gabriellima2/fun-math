import { useEffect, useState } from "react";
import * as nookies from "nookies";

import { PersistedData } from "../components/PersistedData";

import { ComponentType, WithChildren } from "../types";

export interface DataPersistedInCookiesProps extends WithChildren {
	defaultValue: string;
	cookieName: string;
}

export interface InjectedPersistedDataProps {
	dataInCookies: string;
}

export function DataPersistedInCookies<P extends InjectedPersistedDataProps>(
	Component: ComponentType<P>
) {
	return function HighOrder(props: P & DataPersistedInCookiesProps) {
		const [dataInCookies, setDataInCookies] = useState<null | string>(null);

		const { [props.cookieName]: persistedExerciseID } = nookies.parseCookies();

		const handlePersistedData = (continueWithPersistedData: boolean) => {
			if (continueWithPersistedData)
				return setDataInCookies(persistedExerciseID);

			return setDataInCookies(props.defaultValue);
		};

		useEffect(() => {
			if (persistedExerciseID) return;

			setDataInCookies(props.defaultValue);
		}, []);

		if (!dataInCookies)
			return <PersistedData handlePersistedData={handlePersistedData} />;

		return <Component {...(props as P)} dataInCookies={dataInCookies} />;
	};
}
