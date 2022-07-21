import { useState } from "react";

import { useRandomCalculationGenerator } from "./useRandomCalculationGenerator";

import { UserSelectedOptions } from "../../contexts/UserSelectedOptionsContext";
import { Exercise, GetCorrectResult } from "../../types/hooks";
import { exercises } from "../../constants";
import { replaceCommaWithDot } from "../../utils/handleNumbers";

interface SelectedOptions extends UserSelectedOptions {}

export function useExercise(
	selectedOptions: SelectedOptions
): Exercise | undefined {
	const [userAnswerIsCorrect, setUserAnswerIsCorrect] = useState<
		boolean | null
	>(null);

	const formatAnswer = (userAnswer: string) => {
		if (!userAnswer.includes(",") || !userAnswer.includes("."))
			return userAnswer;

		return replaceCommaWithDot(userAnswer);
	};

	const checkUserAnswer = (
		userAnswer: string,
		getCorrectResult: GetCorrectResult
	) => {
		if (!userAnswer) return;

		const formattedUserAnswer = formatAnswer(userAnswer);
		const correctResult = getCorrectResult();

		console.log(correctResult);

		if (!correctResult) return;

		setUserAnswerIsCorrect(formattedUserAnswer === correctResult);
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
