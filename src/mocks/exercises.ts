import { BsQuestionDiamondFill, BsShuffle } from "react-icons/bs";

import type { IExercise } from "@interfaces/IExercise";
import { ExerciseNames } from "@constants/index";

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
