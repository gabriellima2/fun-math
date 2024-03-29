import { createContext, useContext, useState } from "react";

import { exercises } from "@mocks/exercises";
import { operators } from "@mocks/operators";

import { getById } from "@utils/get-by-id";

import type { WithChildren } from "src/@types/TGlobals";
import type { IOperator } from "@global-types/IOperator";
import type { IExercise } from "@global-types/IExercise";

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
		const hasSelectedExercise = getById(exercises, selectedExerciseName);

		if (!hasSelectedExercise) return;

		setExercisePreferences((prevState) => ({
			operator: hasSelectedExercise.needOperator ? prevState.operator : null,
			exercise: hasSelectedExercise,
		}));
	};

	const userPreferencesIsValid = () => {
		if (exercisePreferences.exercise) {
			return (
				!exercisePreferences.exercise.needOperator ||
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
