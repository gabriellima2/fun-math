enum type {
	addition = "addition",
	subtraction = "subtraction",
	division = "division",
	multiply = "multiply",
}

const data = [
	{
		id: type.addition,
		name: "Adição",
		symbol: "+",
		image: "/operators/addition.svg",
	},
	{
		id: type.subtraction,
		name: "Subtração",
		symbol: "-",
		image: "/operators/subtraction.svg",
	},
	{
		id: type.division,
		name: "Divisão",
		symbol: "÷",
		image: "/operators/division.svg",
	},
	{
		id: type.multiply,
		name: "Multiplicação",
		symbol: "x",
		image: "/operators/multiply.svg",
	},
];

export const operators = { type, data };
