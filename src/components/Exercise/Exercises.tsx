import React, { useContext } from "react";

import { Radio } from "../Infra/Accessibility/Radio";

import { UserSelectedOptionsContext } from "@contexts/UserSelectedOptionsContext";

import { exercises } from "../../mocks";
import type { ExerciseType } from "@globalTypes";

interface ItemProps {
	exercise: ExerciseType;
}

const Item = ({ exercise, ...props }: ItemProps) => (
	<Radio.Option
		value={exercise.id}
		key={exercise.id}
		className="w-full options__text"
	>
		<>
			<i className="text-3xl md:text-4xl">
				{React.createElement(exercise.icon, null)}
			</i>
			<span>{exercise.name}</span>
		</>
	</Radio.Option>
);

export const Exercises = React.memo(() => {
	const { userSelectedOptions, selectExercise } = useContext(
		UserSelectedOptionsContext
	);

	return (
		<Radio.Group
			label="Tipos de exercícios disponíveis"
			handleChange={selectExercise}
			currentActiveOption={userSelectedOptions.exercise?.id || null}
			className="flex flex-col gap-2 sm:flex-row"
		>
			{exercises.data.map((exercise) => (
				<Item exercise={exercise} key={exercise.id} />
			))}
		</Radio.Group>
	);
});
