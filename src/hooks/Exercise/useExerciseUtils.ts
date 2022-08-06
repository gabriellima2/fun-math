import { useState } from "react";

import { isFloat, replaceCommaWithDot } from "../../utils/handleNumbers";

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

	const checkUserAnswer = (userAnswer: string, result: string) => {
		if (userAnswer === "") return;

		if (isFloat(userAnswer)) {
			const userAnswerFormatted = replaceCommaWithDot(userAnswer);

			return setUserAnswerIsCorrect(userAnswerFormatted == result);
		}

		setUserAnswerIsCorrect(userAnswer == result);
	};

	return {
		userAnswerIsCorrect,
		checkUserAnswer,
		clearUserAnswerIsCorrect,
	};
}
