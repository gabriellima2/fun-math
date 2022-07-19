import { useState } from "react";

import { useRandomCalculationGenerator } from "./useRandomCalculationGenerator";

import { UserSelectedOptions } from "../../contexts/UserSelectedOptionsContext";
import { Exercise, GetCorrectResult } from "../../types/hooks";
import { exercises } from "../../constants";

interface SelectedOptions extends UserSelectedOptions {}

export function useExercise(
	selectedOptions: SelectedOptions
): Exercise | undefined {
	const [userAnswerIsCorrect, setUserAnswerIsCorrect] = useState<
		boolean | null
	>(null);

	const checkUserAnswer = (
		userAnswer: string,
		getCorrectResult: GetCorrectResult
	) => {
		const correctResult = getCorrectResult();

		if (!correctResult) return;

		setUserAnswerIsCorrect(userAnswer === correctResult);
	};

	if (
		selectedOptions.exercise === exercises.type.random &&
		selectedOptions.operator
	)
		return {
			userAnswerIsCorrect,
			checkUserAnswer,
			...useRandomCalculationGenerator(selectedOptions.operator),
		};
}
