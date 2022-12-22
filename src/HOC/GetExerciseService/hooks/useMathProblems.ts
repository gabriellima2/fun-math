import { useState } from "react";

import { exercisesServices } from "@services/exercises-services";
import type { HookExerciseReturn } from "./hooks";

export function useMathProblems(): HookExerciseReturn {
	const [currentPosition, setCurrentPosition] = useState(0);
	const { getMathProblems } = exercisesServices;

	const handle = (specificExercise?: string) => {
		setCurrentPosition((prevState) => (prevState += 1));
		return getMathProblems(specificExercise || currentPosition.toString());
	};

	return {
		handle,
	};
}
