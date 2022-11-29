import React, { memo } from "react";

import { useExercisePreferences } from "@contexts/ExercisePreferences";

import { Radio } from "@components/Radio";

import type { IExercise } from "@mocks/exercises";

interface ExercisesOptionProps {
	exercises: IExercise[];
}

interface ExerciseProps
	extends Pick<IExercise, "icon" | "displayText" | "id"> {}

const Exercise = (props: ExerciseProps) => (
	<Radio.Option value={props.id}>
		<i className="text-2xl md:text-4xl">
			{React.createElement(props.icon, null)}
		</i>
		<p>{props.displayText}</p>
	</Radio.Option>
);

export const ExercisesOption = memo(({ exercises }: ExercisesOptionProps) => {
	const { exercisePreferences, setExercise } = useExercisePreferences();

	return (
		<Radio.Group
			label="Tipo de exercício:"
			value={exercisePreferences.exercise?.id}
			onChange={setExercise}
		>
			<div className="grid grid-cols-1 sm:grid-cols-2 grid-rows-2 sm:grid-rows-1 gap-3 sm:gap-4">
				{exercises.map((exercise) => (
					<Exercise {...exercise} key={exercise.id} />
				))}
			</div>
		</Radio.Group>
	);
});
