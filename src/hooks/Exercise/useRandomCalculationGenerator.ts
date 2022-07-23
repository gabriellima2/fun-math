import { useEffect, useState } from "react";

import { SelectedOperator } from "../../contexts/UserSelectedOptionsContext";

import { ExerciseGenerator, GetCorrectResult } from "../../types/hooks";
import { operators } from "../../constants";
import {
	generateRandomNumber,
	limitDecimalPlaces,
} from "../../utils/handleNumbers";

const MIN_DECIMAL_PLACES = 3;

interface Operator extends SelectedOperator {}

interface CalculationNumbers {
	firstNumber: number | null;
	secondNumber: number | null;
}

export function useRandomCalculationGenerator(
	operator: Operator
): ExerciseGenerator {
	const [calculationNumbers, setCalculationNumbers] =
		useState<CalculationNumbers>({
			firstNumber: null,
			secondNumber: null,
		} as CalculationNumbers);

	const isDivisionOrMultiply = () => {
		return (
			operator.id === operators.type.division ||
			operator.id === operators.type.multiply
		);
	};

	const generateNumber = (
		key: "firstNumber" | "secondNumber",
		max: number = 100,
		min: number = 1
	) => {
		setCalculationNumbers((prevState) => ({
			...prevState,
			[key]: generateRandomNumber(max, min, Math),
		}));
	};

	const getNextExercise = () => {
		if (isDivisionOrMultiply()) return generateNumber("firstNumber", 80, 10);

		generateNumber("firstNumber");
	};

	const getCorrectResult: GetCorrectResult = () => {
		if (!calculationNumbers.firstNumber || !calculationNumbers.secondNumber)
			return;

		let correctResult: number | null = null;

		switch (operator.id) {
			case operators.type.addition:
				correctResult =
					calculationNumbers.firstNumber + calculationNumbers.secondNumber;
				break;

			case operators.type.subtraction:
				correctResult =
					calculationNumbers.firstNumber - calculationNumbers.secondNumber;
				break;

			case operators.type.division:
				correctResult =
					calculationNumbers.firstNumber / calculationNumbers.secondNumber;
				break;

			case operators.type.multiply:
				correctResult =
					calculationNumbers.firstNumber * calculationNumbers.secondNumber;
				break;
		}

		if (!correctResult) return;

		return limitDecimalPlaces(correctResult.toString(), MIN_DECIMAL_PLACES);
	};

	useEffect(() => {
		if (isDivisionOrMultiply()) return generateNumber("firstNumber", 80, 10);

		generateNumber("firstNumber");
	}, []);

	useEffect(() => {
		if (isDivisionOrMultiply()) return generateNumber("secondNumber", 10, 1);

		generateNumber("secondNumber", calculationNumbers.firstNumber!);
	}, [calculationNumbers.firstNumber]);

	return {
		description: `Qual o resultado de ${calculationNumbers.firstNumber} ${operator.symbol} ${calculationNumbers.secondNumber}?`,
		getNextExercise,
		getCorrectResult,
	};
}
