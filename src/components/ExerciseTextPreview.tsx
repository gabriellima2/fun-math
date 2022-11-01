import { useContext } from "react";
import { BsCardText } from "react-icons/bs";

import { Popover } from "./Infra/Accessibility/Popover";

import { CurrentExerciseContext } from "@contexts/CurrentExerciseContext";

export const ExerciseTextPreview = () => {
	const { currentExercise } = useContext(CurrentExerciseContext);

	return (
		<Popover.Group>
			<Popover.Button
				title="Texto do exercício"
				className="text-lg sm:text-xl md:text-2xl"
			>
				<BsCardText />
			</Popover.Button>
			<Popover.Panel className="absolute z-50">
				<div className="max-w-[15.5rem] md:max-w-[16.5rem] bg-black-400/90 p-4 border-black-300/80 border-4 rounded shadow-md">
					<p className="font-medium">{currentExercise?.text}</p>
				</div>
			</Popover.Panel>
		</Popover.Group>
	);
};
