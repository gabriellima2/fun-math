import { createContext, useContext, useState } from "react";

import { exercises } from "@mocks/exercises";
import { operators } from "@mocks/operators";

import type { WithChildren } from "@globalTypes/TGlobals";
import type { IOperator } from "@interfaces/IOperator";
import type { IExercise } from "@interfaces/IExercise";

export type SelectedOperator = Omit<IOperator, "image">;
export type SelectedExercise = Omit<IExercise, "icon">;

export interface Preferences {
	operator: SelectedOperator | null;
	exercise: SelectedExercise | null;
}

interface UserExerciseSettingsProperties {
	exercisePreferences: Preferences;
	setOperator: (selectedOperatorName: string) => void;
	setExercise: (selectedExerciseName: string) => void;
	userExerciseSettingsIsValid: () => boolean;
}

export const ExercisePreferences = createContext(
	{} as UserExerciseSettingsProperties
);

export const ExercisePreferencesProvider = ({ children }: WithChildren) => {
	const [exercisePreferences, setExercisePreferences] = useState<Preferences>(
		{} as Preferences
	);

	const setOperator = (selectedOperatorName: string) => {
		setExercisePreferences((prevState) => ({
			...prevState,
			operator: operators.search(selectedOperatorName),
		}));
	};

	const setExercise = (selectedExerciseName: string) => {
		const isProblem = selectedExerciseName === exercises.type.problem;

		setExercisePreferences((prevState) => ({
			operator: isProblem ? null : prevState.operator,
			exercise: exercises.search(selectedExerciseName),
		}));
	};

	const userExerciseSettingsIsValid = () => {
		if (exercisePreferences.exercise) {
			return (
				exercisePreferences.exercise.id === exercises.type.problem ||
				!!exercisePreferences.operator
			);
		}

		return true;
	};

	return (
		<ExercisePreferences.Provider
			value={{
				exercisePreferences,
				setOperator,
				setExercise,
				userExerciseSettingsIsValid,
			}}
		>
			{children}
		</ExercisePreferences.Provider>
	);
};

export const useExercisePreferences = () => useContext(ExercisePreferences);
