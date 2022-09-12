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
			props.queryName,
			cookies.name,
			injectedProps ? injectedProps.currentValueCookies : cookies.defaultValue
		);

		useExerciseDataHandler(data, addCurrentExercise);

		if (error && error.message)
			return (
				<Error.FullScreen
					withLogo={true}
					message={error.message}
					className="font-semibold text-xl md:text-2xl text-center"
				/>
			);

		return <>{loading ? <Loading.FullScreen /> : props.children}</>;
	}
);
