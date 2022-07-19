import { useEffect, useState } from "react";

import { SelectedOperator } from "../../contexts/UserSelectedOptionsContext";

import { generateRandomNumber } from "../../utils/generateRandomNumber";
import { ExerciseGenerator } from "../../types/hooks";

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

		switch (operator.id) {
			case "addition":
				return (
					calculationNumbers.firstNumber + calculationNumbers.secondNumber
				).toString();
			case "subtraction":
				return (
					calculationNumbers.firstNumber - calculationNumbers.secondNumber
				).toString();
			case "multiply":
				return (
					calculationNumbers.firstNumber * calculationNumbers.secondNumber
				).toString();
			case "division":
				return (
					calculationNumbers.firstNumber / calculationNumbers.secondNumber
				).toFixed(2);
		}
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
