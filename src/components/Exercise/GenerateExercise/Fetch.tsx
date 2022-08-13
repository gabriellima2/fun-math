import { useContext } from "react";

import {
	useExerciseDataHandler,
	useExerciseFetch,
} from "../../../hooks/Exercise";

import { Error, Loading } from "../../Infra";

import {
	DataPersistedInCookies,
	DataPersistedInCookiesProps,
	InjectedPersistedDataProps,
} from "../../../HOC/DataPersistedInCookies";
import { CurrentExerciseContext } from "../../../contexts/CurrentExerciseContext";

import { Children } from "../../../types";

interface FetchProps
	extends InjectedPersistedDataProps,
		Pick<DataPersistedInCookiesProps, "cookieName"> {
	queryName: string;
	children?: Children;
}

// Lida com exercícios vindos da API
export const Fetch = DataPersistedInCookies((props: FetchProps) => {
	const { addCurrentExercise } = useContext(CurrentExerciseContext);
	const { loading, error, data } = useExerciseFetch(
		props.queryName!,
		Number(props.dataInCookies),
		props.cookieName
	);

	useExerciseDataHandler(data, addCurrentExercise);

	if (error?.message) return <Error message={error.message} />;

	return <>{loading ? <Loading /> : props.children}</>;
});
