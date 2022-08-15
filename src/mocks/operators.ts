enum type {
	subtraction = "subtraction",
	addition = "addition",
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

function search(id: string) {
	const [operator] = operators.data.filter((operator) => operator.id === id);

	return operator;
}

export const operators = { type, data, search };
