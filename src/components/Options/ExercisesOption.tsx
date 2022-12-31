import React, { memo } from "react";

import { useExercisePreferences } from "@contexts/ExercisePreferences";

import { Exercise } from "./components/Exercise";
import { Radio } from "@components/Radio";

import type { IExercise } from "@global-types/IExercise";

interface ExercisesOptionProps {
	exercises: IExercise[];
}

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
