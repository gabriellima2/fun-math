import { useState } from "react";

import { isFloat, removeNumberSeparators } from "../../utils/handleNumbers";

interface ExerciseUtils {
	userAnswerIsCorrect: boolean | undefined;
	checkUserAnswer: (userAnswer: string, result: string) => void;
	clearUserAnswerIsCorrect: () => void;
}

const MIN_EMPTY_SPACE = 2;
const VALUE_TO_FILL_EMPTY_SPACE = "0";

function getTotalEmptySpace(mainValue: string, valueToCompare: string) {
	return mainValue.length - valueToCompare.length;
}

// Disponibiliza funções e estados para manipular os exercicios.
export function useExerciseUtils(): ExerciseUtils {
	const [userAnswerIsCorrect, setUserAnswerIsCorrect] = useState<
		boolean | undefined
	>(undefined);

	const clearUserAnswerIsCorrect = () => setUserAnswerIsCorrect(undefined);

	const compareResult = (userAnswer: string, result: string) =>
		setUserAnswerIsCorrect(userAnswer == result);

	const checkUserAnswer = (userAnswer: string, result: string) => {
		if (userAnswer === "") return;

		if (isFloat(result)) {
			const userAnswerFormatted = removeNumberSeparators(userAnswer);
			const resultFormatted = removeNumberSeparators(result);

			const totalEmptySpace = getTotalEmptySpace(
				resultFormatted,
				userAnswerFormatted
			);

			if (totalEmptySpace <= MIN_EMPTY_SPACE) {
				const filledUserAnswer = userAnswerFormatted.padEnd(
					userAnswerFormatted.length + totalEmptySpace,
					VALUE_TO_FILL_EMPTY_SPACE
				);

				return compareResult(filledUserAnswer, resultFormatted);
			}

			return compareResult(userAnswerFormatted, resultFormatted);
		}

		compareResult(userAnswer, result);
	};

	return {
		userAnswerIsCorrect,
		checkUserAnswer,
		clearUserAnswerIsCorrect,
	};
}
