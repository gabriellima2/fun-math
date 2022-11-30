import { createContext, useContext, useState } from "react";

import { Exercise, exercises } from "@mocks/exercises";
import { operators } from "@mocks/operators";

import { getById } from "@utils/getById";
import { ExerciseNames } from "@constants/index";

import type { WithChildren } from "src/@types/TGlobals";
import type { OperatorModel } from "@models/operator-model";

export type SelectedOperator = Omit<OperatorModel, "image">;
export type SelectedExercise = Omit<Exercise, "icon">;

export interface Preferences {
	operator: SelectedOperator | null;
	exercise: SelectedExercise | null;
}

interface UserExerciseSettingsProperties {
	exercisePreferences: Preferences;
	setOperator: (selectedOperatorName: string) => void;
	setExercise: (selectedExerciseName: string) => void;
	userPreferencesIsValid: () => boolean;
}

export const ExercisePreferences = createContext(
	{} as UserExerciseSettingsProperties
);

export const ExercisePreferencesProvider = ({ children }: WithChildren) => {
	const [exercisePreferences, setExercisePreferences] = useState<Preferences>(
		{} as Preferences
	);

	const setOperator = (selectedOperatorName: string) => {
		const hasSelectedOperator = getById(operators, selectedOperatorName);

		if (!hasSelectedOperator) return;

		setExercisePreferences((prevState) => ({
			...prevState,
			operator: hasSelectedOperator,
		}));
	};

	const setExercise = (selectedExerciseName: string) => {
		const isProblem = selectedExerciseName === ExerciseNames.problem;
		const hasSelectedExercise = getById(exercises, selectedExerciseName);

		if (!hasSelectedExercise) return;

		setExercisePreferences((prevState) => ({
			operator: isProblem ? null : prevState.operator,
			exercise: hasSelectedExercise,
		}));
	};

	const userPreferencesIsValid = () => {
		if (exercisePreferences.exercise) {
			return (
				exercisePreferences.exercise.id === ExerciseNames.problem ||
				!!exercisePreferences.operator
			);
		}

		return false;
	};

	return (
		<ExercisePreferences.Provider
			value={{
				exercisePreferences,
				setOperator,
				setExercise,
				userPreferencesIsValid,
			}}
		>
			{children}
		</ExercisePreferences.Provider>
	);
};

export const useExercisePreferences = () => useContext(ExercisePreferences);
