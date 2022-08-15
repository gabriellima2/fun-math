import { createContext, useState } from "react";

import { OperatorType, ExerciseType, WithChildren } from "../types";
import { exercises, operators } from "../mocks";

export type SelectedOperator = Pick<OperatorType, "id" | "symbol">;
export type SelectedExercise = ExerciseType;

export interface UserSelectedOptions {
	operator: SelectedOperator | null;
	exercise: SelectedExercise | null;
}

interface UserSelectedOptionsContextProperties {
	userSelectedOptions: UserSelectedOptions;
	selectOperator: (selectedOperatorName: string) => void;
	selectExercise: (selectedExerciseName: string) => void;
	userSelectedOptionsAreNotValid: () => boolean;
}

export const UserSelectedOptionsContext = createContext(
	{} as UserSelectedOptionsContextProperties
);

export const UserSelectedOptionsContextProvider = ({
	children,
}: WithChildren) => {
	const [userSelectedOptions, setUserSelectedOptions] =
		useState<UserSelectedOptions>({} as UserSelectedOptions);

	const selectOperator = (selectedOperatorName: string) => {
		setUserSelectedOptions((prevState) => ({
			...prevState,
			operator: operators.search(selectedOperatorName),
		}));
	};

	const selectExercise = (selectedExerciseName: string) => {
		if (selectedExerciseName === exercises.type.problem) {
			return setUserSelectedOptions((prevState) => ({
				...prevState,
				operator: null,
				exercise: exercises.search(selectedExerciseName),
			}));
		}

		setUserSelectedOptions((prevState) => ({
			...prevState,
			exercise: exercises.search(selectedExerciseName),
		}));
	};

	const userSelectedOptionsAreNotValid = () => {
		if (userSelectedOptions.exercise) {
			if (userSelectedOptions.exercise.id === exercises.type.problem) {
				return false;
			}

			if (userSelectedOptions.operator) {
				return false;
			}
		}

		return true;
	};

	return (
		<UserSelectedOptionsContext.Provider
			value={{
				userSelectedOptions,
				selectOperator,
				selectExercise,
				userSelectedOptionsAreNotValid,
			}}
		>
			{children}
		</UserSelectedOptionsContext.Provider>
	);
};
