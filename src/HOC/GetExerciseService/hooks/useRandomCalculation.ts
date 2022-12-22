import { useCallback } from "react";

import { exercisesServices } from "@services/exercises-services";
import type { HookExerciseReturn } from "./hooks";

export function useRandomCalculation(): HookExerciseReturn {
	const { getRandomCalculation } = exercisesServices;

	const handle = useCallback((operator: string) => {
		return getRandomCalculation(operator);
	}, []);

	return {
		handle,
	};
}
