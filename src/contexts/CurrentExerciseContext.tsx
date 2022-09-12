import { useState, createContext } from "react";

import { WithChildren } from "../types";
import { ExerciseData } from "../types/hooks";
import { currencyConvertBRL, replaceCommaToDot } from "../utils/formatNumbers";

type CurrentExercise = ExerciseData;
type UserAnswerIsCorrect = null | boolean;

interface CurrentExerciseContextProperties {
	userAnswerIsCorrect: UserAnswerIsCorrect;
	currentExercise: CurrentExercise;
	addCurrentExercise: (exercise: CurrentExercise) => void;
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

	const addCurrentExercise = (exercise: CurrentExercise) =>
		setCurrentExercise(exercise);

	const checkValues = (userAnswer: string, result: string) => {
		setUserAnswerIsCorrect(userAnswer === result);
	};

	const clearCorrection = () => setUserAnswerIsCorrect(null);

	const correctExercise = (userAnswer: string) => {
		if (userAnswer === "") return;

		if (currentExercise.type === "currency") {
			const userAnswerFormatted = currencyConvertBRL(userAnswer);

			if (!userAnswerFormatted) return setUserAnswerIsCorrect(false);

			return checkValues(userAnswerFormatted, currentExercise.result);
		}

		if (currentExercise.type === "decimal") {
			const userAnswerFormatted = replaceCommaToDot(userAnswer);

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
