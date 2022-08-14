import { useContext } from "react";

import {
	useExerciseDataHandler,
	useExerciseFetch,
} from "../../../hooks/Exercise";

import {
	DataPersistedInCookies,
	DataPersistedInCookiesProps,
	InjectedPersistedDataProps,
} from "../../../HOC/DataPersistedInCookies";
import { Error, Loading } from "../../Infra";

import { CurrentExerciseContext } from "../../../contexts/CurrentExerciseContext";
import { Children } from "../../../types";

interface FetchProps
	extends InjectedPersistedDataProps,
		Pick<DataPersistedInCookiesProps, "cookies"> {
	queryName: string;
	children?: Children;
}

// Lida com exercícios vindos da API usando dados do exercicio dos cookies.
export const Fetch = DataPersistedInCookies(
	({ cookies, injectedProps, ...props }: FetchProps) => {
		const { addCurrentExercise } = useContext(CurrentExerciseContext);
		const { loading, error, data } = useExerciseFetch(
			props.queryName!,
			cookies.name,
			injectedProps?.currentValueCookies || cookies.defaultValue
		);

		useExerciseDataHandler(data, addCurrentExercise);

		if (error?.message) return <Error.FullScreen message={error.message} />;

		return <>{loading ? <Loading.FullScreen /> : props.children}</>;
	}
);
