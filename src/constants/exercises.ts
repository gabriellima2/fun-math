import { IconType } from "react-icons";
import { BsQuestionDiamondFill, BsShuffle } from "react-icons/bs";

enum type {
	random = "random",
	problem = "problem",
}

enum mode {
	client = "client",
	fetch = "fetch",
}

interface Exercise {
	id: type;
	mode: mode;
	name: string;
	icon: IconType;
	queryName?: string;
}

const data: Exercise[] = [
	{
		id: type.random,
		mode: mode.client,
		name: "Cálculos aleatórios",
		icon: BsShuffle,
	},
	{
		id: type.problem,
		mode: mode.fetch,
		name: "Situações-problema",
		icon: BsQuestionDiamondFill,
		queryName: "problem",
	},
];

function search(id: string) {
	const [exercise] = exercises.data.filter((exercise) => exercise.id === id);

	return exercise;
}

export const exercises = { type, data, mode, search };
