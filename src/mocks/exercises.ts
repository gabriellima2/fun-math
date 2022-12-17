import { BsQuestionDiamondFill, BsShuffle } from "react-icons/bs";

import { ExerciseNames } from "@constants";
import type { IconType } from "react-icons";

export interface IExercise {
	id: string;
	displayText: string;
	icon: IconType;
}

export const exercises: IExercise[] = [
	{
		id: ExerciseNames.random,
		displayText: "Cálculos aleatórios",
		icon: BsShuffle,
	},
	{
		id: ExerciseNames.problem,
		displayText: "Situações-problema",
		icon: BsQuestionDiamondFill,
	},
];
