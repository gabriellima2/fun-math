enum type {
	subtraction = "subtraction",
	addition = "addition",
	division = "division",
	multiply = "multiply",
}

const data = [
	{
		id: type.addition,
		displayText: "Adição",
		symbol: "+",
		image: "/operators/addition.svg",
	},
	{
		id: type.subtraction,
		displayText: "Subtração",
		symbol: "-",
		image: "/operators/subtraction.svg",
	},
	{
		id: type.division,
		displayText: "Divisão",
		symbol: "÷",
		image: "/operators/division.svg",
	},
	{
		id: type.multiply,
		displayText: "Multiplicação",
		symbol: "x",
		image: "/operators/multiply.svg",
	},
];

function search(id: string) {
	const [operator] = operators.data.filter((operator) => operator.id === id);

	return operator;
}

export const operators = { type, data, search };
