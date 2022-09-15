import { useContext } from "react";

import { useExerciseFetch } from "../../../hooks/Exercise";
import { useAsyncDataMemoizer } from "../../../hooks/useAsyncDataMemoizer";

import {
	DataPersistedInCookies,
	DataPersistedInCookiesProps,
	InjectedPersistedDataProps,
} from "../../../HOC/DataPersistedInCookies";
import { Error, Loading } from "../../Infra";

import { CurrentExerciseContext } from "../../../contexts/CurrentExerciseContext";
import { Children } from "../../../types";
import { ExerciseDataResponse } from "../../../types/hooks";

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

		// Para termos a mesma instância do objeto entre re-renderizações.
		useAsyncDataMemoizer<ExerciseDataResponse | undefined>(
			data,
			(memoizedData: ExerciseDataResponse | undefined) =>
				memoizedData && addCurrentExercise(memoizedData),

			[data && data.result]
		);

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
