import { useDispatch } from "react-redux";
import useSWR from "swr";

import { useAsyncMemo } from "./useAsyncMemo";
import { setMessage } from "@redux/modules/tip-module/actions";

import type { ExerciseResponse } from "@services/exercises-services";
import type { OutputExerciseDTO } from "@dtos/exercise-dto";

interface UseExerciseResponse {
	exercise: OutputExerciseDTO | undefined | null;
	error: string | undefined;
	isLoading: boolean;
	getNextExercise: () => void;
}

export function useExercise(
	fetcher: () => Promise<ExerciseResponse>
): UseExerciseResponse {
	const dispatch = useDispatch();
	const { data, error, isLoading, mutate } = useSWR<ExerciseResponse>(
		"exercise",
		fetcher
	);

	const getNextExercise = () => mutate();

	useAsyncMemo(
		data,
		(exercise) => {
			dispatch(
				setMessage({
					message: exercise?.data?.tip || "Desculpe, não há dicas disponíveis",
				})
			);
		},
		[data]
	);

	return {
		exercise: data?.data,
		error: data?.message || error,
		isLoading,
		getNextExercise,
	};
}
