import { OperatorNames } from "@constants";
import type { IOperator } from "@global-types/IOperator";

export const operators: IOperator[] = [
	{
		id: OperatorNames.addition,
		displayText: "Adição",
		symbol: "+",
		image: "/operators/addition.svg",
	},
	{
		id: OperatorNames.subtraction,
		displayText: "Subtração",
		symbol: "-",
		image: "/operators/subtraction.svg",
	},
	{
		id: OperatorNames.division,
		displayText: "Divisão",
		symbol: "÷",
		image: "/operators/division.svg",
	},
	{
		id: OperatorNames.multiply,
		displayText: "Multiplicação",
		symbol: "x",
		image: "/operators/multiply.svg",
	},
];
