import { createContext, useState } from "react";

import { Operators, WithChildren } from "../types";
import { exercises } from "../constants";
import { getOperator } from "../utils/getOperator";

export type SelectedOperator = Pick<Operators, "id" | "symbol">;
export type SelectedExercise = string;

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
			operator: getOperator(selectedOperatorName),
		}));
	};

	const selectExercise = (selectedExerciseName: string) => {
		if (selectedExerciseName === exercises.type.problem) {
			return setUserSelectedOptions((prevState) => ({
				...prevState,
				operator: null,
				exercise: selectedExerciseName,
			}));
		}

		setUserSelectedOptions((prevState) => ({
			...prevState,
			exercise: selectedExerciseName,
		}));
	};

	const userSelectedOptionsAreNotValid = () => {
		if (userSelectedOptions.exercise) {
			if (userSelectedOptions.exercise === exercises.type.problem) {
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
