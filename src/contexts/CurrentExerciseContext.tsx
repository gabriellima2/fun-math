import { useState, createContext } from "react";

import { WithChildren } from "../types";
import { ExerciseMode } from "../types/hooks";

type CurrentExercise = ExerciseMode;

interface CurrentExerciseContextProperties {
	currentExercise: CurrentExercise;
	addCurrentExercise: (exercise: CurrentExercise) => void;
}

export const CurrentExerciseContext = createContext(
	{} as CurrentExerciseContextProperties
);

export const CurrentExerciseContextProvider = ({ children }: WithChildren) => {
	const [currentExercise, setCurrentExercise] = useState<CurrentExercise>(
		{} as CurrentExercise
	);

	const addCurrentExercise = (exercise: CurrentExercise) =>
		setCurrentExercise(exercise);

	return (
		<CurrentExerciseContext.Provider
			value={{ currentExercise, addCurrentExercise }}
		>
			{children}
		</CurrentExerciseContext.Provider>
	);
};
