import useSWR from "swr";

import type { ExerciseResponse } from "@services/exercises-services";

export function useExercise(fetcher: () => Promise<ExerciseResponse>) {
	const { data, error, isLoading, mutate } = useSWR<ExerciseResponse>(
		"exercise",
		fetcher
	);

	const getNextExercise = () => mutate();

	return {
		exercise: data?.data,
		error: data?.message || error,
		isLoading,
		getNextExercise,
	};
}
