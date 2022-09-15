import { useState, createContext } from "react";

import { formatToBRLCurrency } from "../utils/formatToBRLCurrency";
import { getValueType } from "../utils/getValueType";

import { ExerciseData, ExerciseDataResponse } from "../types/hooks";
import { WithChildren } from "../types";

type CurrentExercise = ExerciseData;
type UserAnswerIsCorrect = null | boolean;

interface CurrentExerciseContextProperties {
	userAnswerIsCorrect: UserAnswerIsCorrect;
	currentExercise: CurrentExercise;
	addCurrentExercise: (exercise: ExerciseDataResponse) => void;
	correctExercise: (userAnswer: string) => void;
	clearCorrection: () => void;
}

export const CurrentExerciseContext = createContext(
	{} as CurrentExerciseContextProperties
);

export const CurrentExerciseContextProvider = ({ children }: WithChildren) => {
	const [userAnswerIsCorrect, setUserAnswerIsCorrect] =
		useState<UserAnswerIsCorrect>(null);
	const [currentExercise, setCurrentExercise] = useState<CurrentExercise>(
		{} as CurrentExercise
	);

	const addCurrentExercise = (exercise: ExerciseDataResponse) => {
		setCurrentExercise({ ...exercise, type: getValueType(exercise.result) });
	};

	const checkValues = (userAnswer: string, result: string) => {
		setUserAnswerIsCorrect(userAnswer === result);
	};

	const clearCorrection = () => setUserAnswerIsCorrect(null);

	const correctExercise = (userAnswer: string) => {
		if (userAnswer === "") return;

		if (currentExercise.type === "currency") {
			const userAnswerFormatted = formatToBRLCurrency(userAnswer);

			return checkValues(userAnswerFormatted, currentExercise.result);
		}

		if (currentExercise.type === "decimal") {
			const userAnswerFormatted = userAnswer.replaceAll(",", ".");

			return checkValues(userAnswerFormatted, currentExercise.result);
		}

		checkValues(userAnswer, currentExercise.result);
	};

	return (
		<CurrentExerciseContext.Provider
			value={{
				userAnswerIsCorrect,
				currentExercise,
				addCurrentExercise,
				correctExercise,
				clearCorrection,
			}}
		>
			{children}
		</CurrentExerciseContext.Provider>
	);
};
