import { BsQuestionDiamondFill, BsShuffle } from "react-icons/bs";

export enum exerciseTypesID {
	random = "random",
	problem = "problem",
}

export const exerciseTypes = [
	{
		id: exerciseTypesID.random,
		name: "Cálculos aleatórios",
		icon: BsShuffle,
	},
	{
		id: exerciseTypesID.problem,
		name: "Situações-problema",
		icon: BsQuestionDiamondFill,
	},
];
