import { createContext, useState } from "react";

import { WithChildren } from "../types";

interface UserChoice {
	operatorType: null | string;
	exerciseType: null | string;
}

interface UserChoicesContextTypes {
	userChoices: UserChoice;
	selectOperatorType: (operator: string) => void;
	selectExerciseType: (exercise: string) => void;
}

export const UserChoicesContext = createContext({} as UserChoicesContextTypes);

export const UserChoicesContextProvider = ({ children }: WithChildren) => {
	const [userChoices, setUserChoices] = useState({
		operatorType: null,
		exerciseType: null,
	} as UserChoice);

	const selectOperatorType = (operator: string) =>
		setUserChoices((prevState) => ({ ...prevState, operatorType: operator }));

	const selectExerciseType = (exercise: string) => {
		if (exercise === "problem") {
			return setUserChoices((prevState) => ({
				...prevState,
				exerciseType: exercise,
				operatorType: null,
			}));
		}

		setUserChoices((prevState) => ({ ...prevState, exerciseType: exercise }));
	};

	return (
		<UserChoicesContext.Provider
			value={{
				userChoices,
				selectOperatorType,
				selectExerciseType,
			}}
		>
			{children}
		</UserChoicesContext.Provider>
	);
};
