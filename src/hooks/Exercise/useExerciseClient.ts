import { useEffect, useState } from "react";

import { SelectedOperator } from "../../contexts/UserSelectedOptionsContext";

import { ExerciseMode } from "../../types/hooks";
import { operators } from "../../constants";
import {
	generateRandomNumber,
	limitDecimalPlaces,
} from "../../utils/handleNumbers";

const MIN_DECIMAL_PLACES = 3;

interface CalculationNumbers {
	firstNumber: number | null;
	secondNumber: number | null;
}

const getCalculationResultByOperatorType = {
	[operators.type.addition]: (firstNumber: number, secondNumber: number) =>
		firstNumber + secondNumber,
	[operators.type.subtraction]: (firstNumber: number, secondNumber: number) =>
		firstNumber - secondNumber,
	[operators.type.division]: (firstNumber: number, secondNumber: number) =>
		firstNumber / secondNumber,
	[operators.type.multiply]: (firstNumber: number, secondNumber: number) =>
		firstNumber * secondNumber,
};

export function useExerciseClient(operator: SelectedOperator): ExerciseMode {
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
		max = 100,
		min = 1
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

	const getCorrectResult = () => {
		if (!calculationNumbers.firstNumber || !calculationNumbers.secondNumber)
			return;

		const { firstNumber, secondNumber } = calculationNumbers;

		const getCalculationResult =
			getCalculationResultByOperatorType[operator.id];
		const correctResult = getCalculationResult(firstNumber, secondNumber);

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
		text: `Qual o resultado de ${calculationNumbers.firstNumber} ${operator.symbol} ${calculationNumbers.secondNumber}?`,
		tip: null,
		solution: getCorrectResult(),
		getNextExercise,
	};
}
