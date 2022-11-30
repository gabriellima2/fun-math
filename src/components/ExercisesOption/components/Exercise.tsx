import React from "react";

import { Radio } from "@components/Radio";
import type { IExercise } from "@mocks/exercises";

interface ExerciseProps
	extends Pick<IExercise, "icon" | "displayText" | "id"> {}

export const Exercise = (props: ExerciseProps) => (
	<Radio.Option value={props.id}>
		<i className="text-2xl md:text-4xl">
			{React.createElement(props.icon, null)}
		</i>
		<p>{props.displayText}</p>
	</Radio.Option>
);
