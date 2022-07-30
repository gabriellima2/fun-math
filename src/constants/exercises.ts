import { BsQuestionDiamondFill, BsShuffle } from "react-icons/bs";

enum type {
	random = "random",
	problem = "problem",
}

enum mode {
	client = "client",
	fetch = "fetch",
}

const data = [
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
	},
];

export const exercises = { type, data, mode };
