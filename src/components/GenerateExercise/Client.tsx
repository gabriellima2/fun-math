import { useContext } from "react";

import { useExerciseClient } from "../../hooks/Exercise";
import { useAsyncDataMemoizer } from "../../hooks/useAsyncDataMemoizer";

import { Error, Loading } from "@components/Infra";

import { CurrentExerciseContext } from "@contexts/CurrentExerciseContext";
import { SelectedOperator } from "@contexts/UserSelectedOptionsContext";

import type { Children } from "@globalTypes";
import type { ExerciseDataResponse } from "@hookTypes";

interface ClientProps {
	operator: SelectedOperator;
	children?: Children;
}

// Lida com exercícios gerados no Client
export const Client = ({ operator, ...props }: ClientProps) => {
	const { addCurrentExercise } = useContext(CurrentExerciseContext);
	const { data, error, loading } = useExerciseClient(operator);

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
};
