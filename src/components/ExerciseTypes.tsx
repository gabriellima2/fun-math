import React, { useContext } from "react";

import { Radio } from "./Radio";

import { UserSelectedOptionsContext } from "../contexts/UserSelectedOptionsContext";

import { exercises } from "../constants";

export const ExerciseTypes = React.memo(() => {
	const { userSelectedOptions, selectExercise } = useContext(
		UserSelectedOptionsContext
	);

	return (
		<Radio.Group
			label="Tipos de exercícios disponíveis"
			handleChange={selectExercise}
			currentActiveOption={userSelectedOptions.exercise}
			className="flex flex-col gap-2 sm:flex-row"
		>
			{exercises.data.map((exercise) => (
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
			))}
		</Radio.Group>
	);
});
