import { useState } from "react";

import {
	getFloatNumberProperties,
	isFloat,
	limitDecimalPlaces,
	replaceCommaWithDot,
} from "../../utils/handleNumbers";

interface ExerciseUtils {
	userAnswerIsCorrect: boolean | undefined;
	checkUserAnswer: (userAnswer: string, result: string) => void;
	clearUserAnswerIsCorrect: () => void;
}

const MIN_DECIMAL_PLACES = 3;

function handleDefaultFloatNumber(userAnswer: string, result: string) {
	const { numbersAfterDecimalPoint } = getFloatNumberProperties(userAnswer);
	const totalDecimalPlaces = numbersAfterDecimalPoint.length;

	if (totalDecimalPlaces >= MIN_DECIMAL_PLACES) {
		const resultFormatted = limitDecimalPlaces(result, totalDecimalPlaces);

		return resultFormatted;
	}

	return result;
}

function handleMoneyNumber(userAnswer: string) {
	const dotDefaultIndex = userAnswer.length - 3;

	if (userAnswer[dotDefaultIndex] == ".") {
		const beforeDot = userAnswer.slice(0, dotDefaultIndex);
		const afterDot = userAnswer.slice(dotDefaultIndex + 1, userAnswer.length);

		userAnswer = beforeDot + "," + afterDot;
		console.log(userAnswer);
	} else if (!userAnswer.includes(",")) {
		userAnswer += ",00";
	}

	if (userAnswer.includes(".")) {
		return userAnswer.replace(".", "");
	}

	return userAnswer;
}

// Disponibiliza funções e estados para manipular os exercicios.
export function useExerciseUtils(): ExerciseUtils {
	const [userAnswerIsCorrect, setUserAnswerIsCorrect] = useState<
		boolean | undefined
	>(undefined);

	const clearUserAnswerIsCorrect = () => setUserAnswerIsCorrect(undefined);

	const setResult = (userAnswer: string, result: string) =>
		setUserAnswerIsCorrect(userAnswer == result);

	const checkUserAnswer = (userAnswer: string, result: string) => {
		if (userAnswer === "") return;

		console.log(result);

		if (isFloat(result)) {
			if (result.includes(".")) {
				const userAnswerFormatted = replaceCommaWithDot(userAnswer);
				const resultFormatted = handleDefaultFloatNumber(userAnswer, result);
				setResult(userAnswerFormatted, resultFormatted);
				return;
			} else if (result.includes(",")) {
				const userAnswerMoneyFormatted = handleMoneyNumber(userAnswer);
				console.log(userAnswerMoneyFormatted);
				setResult(userAnswerMoneyFormatted, result);
				return;
			}
		}

		setResult(userAnswer, result);
	};

	return {
		userAnswerIsCorrect,
		checkUserAnswer,
		clearUserAnswerIsCorrect,
	};
}
