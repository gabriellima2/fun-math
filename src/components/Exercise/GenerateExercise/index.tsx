import { useContext } from "react";

import { Client } from "./Client";
import { Fetch } from "./Fetch";

import { UserSelectedOptionsContext } from "../../../contexts/UserSelectedOptionsContext";

import { mode } from "../../../constants/exercises";
import { Children } from "../../../types";

interface GenerateExerciseProps {
	generateMode: mode;
	children?: Children;
}

export const GenerateExercise = ({
	generateMode,
	...props
}: GenerateExerciseProps) => {
	const { userSelectedOptions } = useContext(UserSelectedOptionsContext);

	if (Object.keys(userSelectedOptions).length <= 0) return null;

	if (generateMode === mode.fetch) {
		const queryName = userSelectedOptions.exercise!.queryName!;

		return (
			<Fetch
				cookieName={`exercise-${queryName}-id.funMath!`}
				defaultValue={"1"}
				queryName={queryName}
			>
				{props.children}
			</Fetch>
		);
	}

	return (
		<Client operator={userSelectedOptions.operator!}>{props.children}</Client>
	);
};
