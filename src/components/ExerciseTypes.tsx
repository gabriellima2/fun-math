import React, { useContext } from "react";

import { Radio } from "./Radio";

import { UserChoicesContext } from "../contexts/UserChoicesContext";

import { exerciseTypes } from "../constants";

export const ExerciseTypes = React.memo(() => {
	const { userChoices, selectExerciseType } = useContext(UserChoicesContext);

	return (
		<Radio.Group
			label="Tipos de exercícios disponíveis"
			handleChange={selectExerciseType}
			currentActiveOption={userChoices.exerciseType}
			className="flex flex-col gap-2 sm:flex-row"
		>
			{exerciseTypes.map((exercise) => (
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
