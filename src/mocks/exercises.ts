import { BsQuestionDiamondFill, BsShuffle } from "react-icons/bs";
import type { IExercise } from "@interfaces/IExercise";

enum type {
	random = "random",
	problem = "problem",
}

export enum mode {
	client = "client",
	fetch = "fetch",
}

const data: IExercise[] = [
	{
		id: type.random,
		mode: mode.client,
		displayText: "Cálculos aleatórios",
		icon: BsShuffle,
	},
	{
		id: type.problem,
		mode: mode.fetch,
		displayText: "Situações-problema",
		icon: BsQuestionDiamondFill,
		queryName: "problem",
	},
];

function search(id: string) {
	const [exercise] = exercises.data.filter((exercise) => exercise.id === id);

	return exercise;
}

export const exercises = { type, data, mode, search };
