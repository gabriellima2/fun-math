import { useState } from "react";

import { useRandomCalculationGenerator } from "./useRandomCalculationGenerator";

import { UserSelectedOptions } from "../../contexts/UserSelectedOptionsContext";
import { isFloat, replaceCommaWithDot } from "../../utils/handleNumbers";
import { Exercise, GetCorrectResult } from "../../types/hooks";
import { exercises } from "../../constants";

interface SelectedOptions extends UserSelectedOptions {}

export function useExercise(
	selectedOptions: SelectedOptions
): Exercise | undefined {
	const [userAnswerIsCorrect, setUserAnswerIsCorrect] = useState<
		boolean | null
	>(null);

	const clearUserAnswerIsCorrect = () => setUserAnswerIsCorrect(null);

	const checkUserAnswer = (
		userAnswer: string,
		getCorrectResult: GetCorrectResult
	) => {
		if (userAnswer === "") return;

		const correctResult = getCorrectResult();

		if (!Number(correctResult)) return;

		if (isFloat(userAnswer)) {
			const userAnswerFormatted = replaceCommaWithDot(userAnswer);

			return setUserAnswerIsCorrect(userAnswerFormatted === correctResult);
		}

		setUserAnswerIsCorrect(userAnswer === correctResult);
	};

	if (
		selectedOptions.exercise === exercises.type.random &&
		selectedOptions.operator
	)
		return {
			userAnswerIsCorrect,
			checkUserAnswer,
			clearUserAnswerIsCorrect,
			...useRandomCalculationGenerator(selectedOptions.operator),
		};
}
