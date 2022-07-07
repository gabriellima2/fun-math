import { createContext, useState } from "react";

import { WithChildren } from "../types";

interface SelectedOperatorContextTypes {
	currentOperator: null | string;
	selectOperator: (operator: string) => void;
}

export const SelectedOperatorContext = createContext(
	{} as SelectedOperatorContextTypes
);

export const SelectedOperatorContextProvider = ({ children }: WithChildren) => {
	const [currentOperator, setCurrentOperator] = useState<null | string>(null);

	const selectOperator = (operator: string) => setCurrentOperator(operator);

	return (
		<SelectedOperatorContext.Provider
			value={{
				currentOperator,
				selectOperator,
			}}
		>
			{children}
		</SelectedOperatorContext.Provider>
	);
};
