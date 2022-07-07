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
		setUserChoices({ ...userChoices, operatorType: operator });

	const selectExerciseType = (exercise: string) =>
		setUserChoices({ ...userChoices, exerciseType: exercise });

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
