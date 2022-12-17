import { BsQuestionDiamondFill, BsShuffle } from "react-icons/bs";

import { ExerciseNames } from "@constants";
import type { IExercise } from "@interfaces/iexercise";

export const exercises: IExercise[] = [
	{
		id: ExerciseNames.random,
		displayText: "Cálculos aleatórios",
		icon: BsShuffle,
		needOperator: true,
	},
	{
		id: ExerciseNames.problem,
		displayText: "Situações-problema",
		icon: BsQuestionDiamondFill,
		needOperator: false,
	},
];
