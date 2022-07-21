import { useEffect, useState } from "react";

import { SelectedOperator } from "../../contexts/UserSelectedOptionsContext";

import { ExerciseGenerator, GetCorrectResult } from "../../types/hooks";
import {
	generateRandomNumber,
	limitDecimalPlaces,
} from "../../utils/handleNumbers";

const MIN_DECIMAL_PLACES = 4;

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

	const generateNumber = (
		key: "firstNumber" | "secondNumber",
		max: number = 100
	) => {
		setCalculationNumbers((prevState) => ({
			...prevState,
			[key]: generateRandomNumber(max, 1, Math),
		}));
	};

	const getNextExercise = () => generateNumber("firstNumber");

	const getCorrectResult: GetCorrectResult = () => {
		if (!calculationNumbers.firstNumber || !calculationNumbers.secondNumber)
			return;

		let correctResult: string | null = null;

		switch (operator.id) {
			case "addition":
				correctResult = (
					calculationNumbers.firstNumber + calculationNumbers.secondNumber
				).toString();
			case "subtraction":
				correctResult = (
					calculationNumbers.firstNumber - calculationNumbers.secondNumber
				).toString();
			case "multiply":
				correctResult = (
					calculationNumbers.firstNumber * calculationNumbers.secondNumber
				).toString();
			case "division":
				correctResult = (
					calculationNumbers.firstNumber / calculationNumbers.secondNumber
				).toString();
		}

		return limitDecimalPlaces(correctResult!, MIN_DECIMAL_PLACES);
	};

	useEffect(() => generateNumber("firstNumber"), []);

	useEffect(() => {
		generateNumber("secondNumber", calculationNumbers.firstNumber!);
	}, [calculationNumbers.firstNumber]);

	return {
		description: `Qual o resultado de ${calculationNumbers.firstNumber} ${operator.symbol} ${calculationNumbers.secondNumber}?`,
		getNextExercise,
		getCorrectResult,
	};
}
