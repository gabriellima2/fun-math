import { randomUUID } from "crypto";

import type { Exercise } from "@domain/exercise";

import { generateRandomNumber } from "@utils/generate-random-number";
import { OperatorNames, OperatorSymbols } from "@constants";

export class RandomCalculationModel {
	public generate(operator: OperatorNames): Exercise {
		const calculationOptions = {
			[OperatorNames.addition]: this.addition,
			[OperatorNames.subtraction]: this.subtraction,
			[OperatorNames.division]: this.division,
			[OperatorNames.multiply]: this.multiply,
		};

		const symbol = OperatorSymbols[operator];
		const { firstNumber, secondNumber, result } =
			calculationOptions[operator]();

		return {
			id: randomUUID(),
			text: `Qual o resultado de ${firstNumber} ${symbol} ${secondNumber}`,
			result: result.toString(),
			nextExerciseURL: "/api/local-exercise/random-calculation",
		};
	}

	private addition() {
		const DEFAULT_LIMITS = { max: 100, min: 1 };

		const firstNumber = generateRandomNumber(DEFAULT_LIMITS);
		const secondNumber = generateRandomNumber({
			...DEFAULT_LIMITS,
			max: firstNumber - 1,
		});
		const result = firstNumber + secondNumber;

		return {
			firstNumber,
			secondNumber,
			result,
		};
	}

	private subtraction() {
		const DEFAULT_LIMITS = { max: 100, min: 2 };

		const firstNumber = generateRandomNumber(DEFAULT_LIMITS);
		const secondNumber = generateRandomNumber({
			...DEFAULT_LIMITS,
			max: firstNumber - 1,
		});
		const result = firstNumber - secondNumber;

		return {
			firstNumber,
			secondNumber,
			result,
		};
	}

	private division() {
		const DEFAULT_LIMITS = { max: 12, min: 2 };
		const generatedNumbers = [
			generateRandomNumber(DEFAULT_LIMITS),
			generateRandomNumber(DEFAULT_LIMITS),
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
		};
	}

	private multiply() {
		const DEFAULT_LIMITS = { max: 50, min: 9 };

		const firstNumber = generateRandomNumber(DEFAULT_LIMITS);
		const secondNumber = generateRandomNumber({
			max: DEFAULT_LIMITS.min,
			min: 2,
		});
		const result = firstNumber * secondNumber;

		return {
			firstNumber,
			secondNumber,
			result,
		};
	}
}
