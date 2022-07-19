import { BsQuestionDiamondFill, BsShuffle } from "react-icons/bs";

enum type {
	random = "random",
	problem = "problem",
}

const data = [
	{
		id: type.random,
		name: "Cálculos aleatórios",
		icon: BsShuffle,
	},
	{
		id: type.problem,
		name: "Situações-problema",
		icon: BsQuestionDiamondFill,
	},
];

export const exercises = { type, data };
