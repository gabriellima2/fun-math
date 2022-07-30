import { useState, createContext } from "react";

import { WithChildren } from "../types";
import { ExerciseMode } from "../types/hooks";

type CurrentExercise = Omit<ExerciseMode, "getNextExercise">;

interface CurrentExerciseContextProperties {
	currentExercise: CurrentExercise;
	addNewCurrentExercise: (exercise: CurrentExercise) => void;
}

export const CurrentExerciseContext = createContext(
	{} as CurrentExerciseContextProperties
);

export const CurrentExerciseContextProvider = ({ children }: WithChildren) => {
	const [currentExercise, setCurrentExercise] = useState<CurrentExercise>(
		{} as CurrentExercise
	);

	const addNewCurrentExercise = (exercise: CurrentExercise) =>
		setCurrentExercise(exercise);

	return (
		<CurrentExerciseContext.Provider
			value={{ currentExercise, addNewCurrentExercise }}
		>
			{children}
		</CurrentExerciseContext.Provider>
	);
};
