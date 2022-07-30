import { useState } from "react";

import { isFloat, replaceCommaWithDot } from "../../utils/handleNumbers";

export interface Exercise {
	userAnswerIsCorrect: boolean | undefined;
	checkUserAnswer: (userAnswer: string, solution: string) => void;
	clearUserAnswerIsCorrect: () => void;
}

export function useExercise(): Exercise {
	const [userAnswerIsCorrect, setUserAnswerIsCorrect] = useState<
		boolean | undefined
	>(undefined);

	const clearUserAnswerIsCorrect = () => setUserAnswerIsCorrect(undefined);

	const checkUserAnswer = (userAnswer: string, solution: string) => {
		if (userAnswer === "") return;

		if (isFloat(userAnswer)) {
			const userAnswerFormatted = replaceCommaWithDot(userAnswer);

			return setUserAnswerIsCorrect(userAnswerFormatted === solution);
		}

		setUserAnswerIsCorrect(userAnswer === solution);
	};

	return {
		userAnswerIsCorrect,
		checkUserAnswer,
		clearUserAnswerIsCorrect,
	};
}
