interface Numbers {
	YNumber: number;
	XNumber: number;
}

enum type {
	subtraction = "subtraction",
	addition = "addition",
	division = "division",
	multiply = "multiply",
}

const calculations = {
	[type.subtraction]: ({ YNumber, XNumber }: Numbers) => YNumber - XNumber,
	[type.addition]: ({ YNumber, XNumber }: Numbers) => YNumber + XNumber,
	[type.division]: ({ YNumber, XNumber }: Numbers) => YNumber / XNumber,
	[type.multiply]: ({ YNumber, XNumber }: Numbers) => YNumber * XNumber,
};

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

export const operators = { type, data, calculations, search };
