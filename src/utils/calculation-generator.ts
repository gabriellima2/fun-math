import { generateRandomNumber } from "./generate-random-number";

interface Limits {
	max: number;
	min: number;
}

interface OutputCalculationGenerator {
	firstNumber: number;
	secondNumber: number;
	result: number;
	operatorSymbol: string;
}

class CalculationGenerator {
	public addition(limits: Limits): OutputCalculationGenerator {
		const firstNumber = generateRandomNumber(limits);
		const secondNumber = generateRandomNumber({
			...limits,
			max: firstNumber - 1,
		});
		const result = firstNumber + secondNumber;

		return {
			firstNumber,
			secondNumber,
			result,
			operatorSymbol: "+",
		};
	}

	public subtraction(limits: Limits): OutputCalculationGenerator {
		const firstNumber = generateRandomNumber(limits);
		const secondNumber = generateRandomNumber({
			...limits,
			max: firstNumber - 1,
		});
		const result = firstNumber - secondNumber;

		return {
			firstNumber,
			secondNumber,
			result,
			operatorSymbol: "-",
		};
	}

	public division(limits: Limits): OutputCalculationGenerator {
		const generatedNumbers = [
			generateRandomNumber(limits),
			generateRandomNumber(limits),
		];

		// Em uma divisão, o dividendo é a multiplicação entre dois números.
		const firstNumber = generatedNumbers[0] * generatedNumbers[1];
		const secondNumber =
			generatedNumbers[generateRandomNumber({ max: 2, min: 0 })];
		const result = firstNumber / secondNumber;

		return {
			firstNumber,
			secondNumber,
			result,
			operatorSymbol: "/",
		};
	}

	public multiply(limits: Limits): OutputCalculationGenerator {
		const firstNumber = generateRandomNumber(limits);
		const secondNumber = generateRandomNumber({
			max: limits.min,
			min: 2,
		});
		const result = firstNumber * secondNumber;

		return {
			firstNumber,
			secondNumber,
			result,
			operatorSymbol: "x",
		};
	}
}

export const calculationGenerator = new CalculationGenerator();
