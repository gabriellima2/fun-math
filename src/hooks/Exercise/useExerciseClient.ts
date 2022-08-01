import { useEffect, useState } from "react";

import { SelectedOperator } from "../../contexts/UserSelectedOptionsContext";

import { ExerciseMode } from "../../types/hooks";
import { operators } from "../../constants";
import {
	generateRandomNumber,
	limitDecimalPlaces,
	isFloat,
} from "../../utils/handleNumbers";

const MIN_DECIMAL_PLACES = 3;

type NumberState = number | null;

interface NumbersData {
	firstNumber: NumberState;
	secondNumber: NumberState;
	solution: NumberState;
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
	const [numbersData, setNumbersData] = useState<NumbersData>({
		firstNumber: null,
		secondNumber: null,
		solution: null,
	} as NumbersData);

	const isDivisionOrMultiply = () => {
		return (
			operator.id === operators.type.division ||
			operator.id === operators.type.multiply
		);
	};

	const getCorrectSolution = (firstNumber: number, secondNumber: number) => {
		const getCalculationResult =
			getCalculationResultByOperatorType[operator.id];

		const correctResult = getCalculationResult(firstNumber, secondNumber);

		if (isFloat(correctResult.toString())) {
			return Number(
				limitDecimalPlaces(correctResult.toString(), MIN_DECIMAL_PLACES)
			);
		}

		return correctResult;
	};

	const getDataForExercise = () => {
		const generatedFirstNumber = generateRandomNumber(100, 1, Math);
		const generatedSecondNumber = generateRandomNumber(
			generatedFirstNumber,
			1,
			Math
		);
		const solution = getCorrectSolution(
			generatedFirstNumber,
			generatedSecondNumber
		);

		setNumbersData({
			firstNumber: generatedFirstNumber,
			secondNumber: generatedSecondNumber,
			solution,
		});
	};

	useEffect(() => getDataForExercise(), []);

	return {
		text: `Qual o resultado de ${numbersData.firstNumber} ${operator.symbol} ${numbersData.secondNumber}?`,
		tip: null,
		solution: numbersData.solution?.toString(),
		getNextExercise: getDataForExercise,
	};
}
