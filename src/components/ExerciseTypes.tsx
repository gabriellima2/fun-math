import React, { useContext } from "react";

import { UserChoicesContext } from "../contexts/UserChoicesContext";

import { exerciseTypes } from "../contents";

export const ExerciseTypes = () => {
	const { userChoices, selectExerciseType } = useContext(UserChoicesContext);

	return (
		<ul className="flex flex-col gap-2 sm:flex-row">
			{exerciseTypes.map((type) => (
				<li key={type.id} className="w-full">
					<button
						onClick={() => selectExerciseType(type.id)}
						disabled={userChoices.exerciseType == type.id}
						className="w-full options options__text"
					>
						<i className="text-3xl md:text-4xl">
							{React.createElement(type.icon, null)}
						</i>
						{type.name}
					</button>
				</li>
			))}
		</ul>
	);
};
