import useSWR from "swr";

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
	const { data, error, isLoading, mutate } = useSWR<ExerciseResponse>(
		"/api/exercise",
		fetcher,
		{ revalidateOnFocus: false }
	);

	const getNextExercise = () => mutate();

	return {
		exercise: data?.data,
		error: data?.message || error,
		isLoading,
		getNextExercise,
	};
}
