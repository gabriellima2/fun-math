import { useEffect, useState } from "react";

import { SelectedOperator } from "../../contexts/UserSelectedOptionsContext";

import { ExerciseGenerator } from "../../types/hooks";
import {
	limitDecimalPlaces,
	generateRandomNumber,
	getFloatNumberProperties,
} from "../../utils/handleNumbers";

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
			[key]: generateRandomNumber(max),
		}));
	};

	const getNextExercise = () => generateNumber("firstNumber");

	const getCorrectResult = () => {
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

		const DECIMAL_PLACES = 3;
		const { numbersAfterDecimalPoint } = getFloatNumberProperties(
			correctResult!
		);

		if (
			!correctResult?.includes(".") ||
			numbersAfterDecimalPoint.length < DECIMAL_PLACES
		)
			return correctResult;

		return limitDecimalPlaces(correctResult, DECIMAL_PLACES);
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
