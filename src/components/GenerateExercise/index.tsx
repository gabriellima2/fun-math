import { useContext } from "react";
import { useRouter } from "next/router";

import { Client } from "./Client";
import { Fetch } from "./Fetch";
import { WithOptionSelected } from "../../HOC/WithOptionSelected";

import { UserSelectedOptionsContext } from "../../contexts/UserSelectedOptionsContext";
import { mode } from "../../mocks/exercises";
import { Children } from "../../types";

interface GenerateExerciseProps {
	generateMode: mode;
	children?: Children;
}

export const GenerateExercise = WithOptionSelected(
	(props: GenerateExerciseProps) => {
		const { query } = useRouter();

		const { userSelectedOptions } = useContext(UserSelectedOptionsContext);

		if (Object.keys(userSelectedOptions).length <= 0) return null;

		if (props.generateMode === mode.fetch) {
			return (
				<Fetch
					queryName={userSelectedOptions.exercise!.queryName!}
					cookies={{
						name: `exercise-${query.id}.funMath!`,
						defaultValue: "1",
						showDialog: true,
					}}
					injectedProps={null} // Props injetadas pelo HOC
				>
					{props.children}
				</Fetch>
			);
		}

		return (
			<Client operator={userSelectedOptions.operator!}>{props.children}</Client>
		);
	}
);
