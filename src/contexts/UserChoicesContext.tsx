import { createContext, useState } from "react";

import { WithChildren } from "../types";
import { exerciseTypesID } from "../constants";

interface UserChoice {
	operatorType: null | string;
	exerciseType: null | string;
}

interface UserChoicesContextProperties {
	userChoices: UserChoice;
	selectOperatorType: (operator: string) => void;
	selectExerciseType: (exercise: string) => void;
	userChoicesAreNotValid: () => boolean;
}

export const UserChoicesContext = createContext(
	{} as UserChoicesContextProperties
);

export const UserChoicesContextProvider = ({ children }: WithChildren) => {
	const [userChoices, setUserChoices] = useState({
		operatorType: null,
		exerciseType: null,
	} as UserChoice);

	const selectOperatorType = (operator: string) =>
		setUserChoices((prevState) => ({ ...prevState, operatorType: operator }));

	const selectExerciseType = (exercise: string) => {
		if (exercise === exerciseTypesID.problem) {
			return setUserChoices((prevState) => ({
				...prevState,
				exerciseType: exercise,
				operatorType: null,
			}));
		}

		setUserChoices((prevState) => ({ ...prevState, exerciseType: exercise }));
	};

	const userChoicesAreNotValid = () => {
		if (userChoices.exerciseType) {
			if (userChoices.exerciseType === exerciseTypesID.problem) {
				return false;
			}

			if (userChoices.operatorType) {
				return false;
			}
		}

		return true;
	};

	return (
		<UserChoicesContext.Provider
			value={{
				userChoices,
				selectOperatorType,
				selectExerciseType,
				userChoicesAreNotValid,
			}}
		>
			{children}
		</UserChoicesContext.Provider>
	);
};
