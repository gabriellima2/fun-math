import { useState } from "react";

import {
	currencyConvertBRL,
	replaceCommaToDot,
} from "../../utils/formatNumbers";
import { isCurrency, isDecimal } from "../../utils/handleExerciseResultType";

interface ExerciseUtils {
	userAnswerIsCorrect: boolean | undefined;
	checkUserAnswer: (userAnswer: string, result: string) => void;
	clearUserAnswerIsCorrect: () => void;
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

		if (isCurrency(result)) {
			const userAnswerFormatted = currencyConvertBRL(userAnswer);

			if (!userAnswerFormatted) return setUserAnswerIsCorrect(false);

			return compareResult(userAnswerFormatted, result);
		}

		if (isDecimal(result)) {
			const userAnswerFormatted = replaceCommaToDot(userAnswer);

			return compareResult(userAnswerFormatted, result);
		}

		compareResult(userAnswer, result);
	};

	return {
		userAnswerIsCorrect,
		checkUserAnswer,
		clearUserAnswerIsCorrect,
	};
}
