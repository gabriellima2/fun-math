import { useEffect, useState } from "react";

import { SelectedOperator } from "../../contexts/UserSelectedOptionsContext";

import {
	generateRandomNumber,
	limitDecimalPlaces,
	isFloat,
} from "../../utils/handleNumbers";
import { ExerciseResponse } from "../../types/hooks";
import { operators } from "../../constants";

type NumberState = number | null;

interface Limitations {
	max: number;
	min: number;
}

interface NumbersData {
	firstNumber: NumberState;
	secondNumber: NumberState;
	result: NumberState;
}

const MIN_DECIMAL_PLACES = 3;

const DEFAULT_LIMITATIONS: Limitations = {
	max: 100,
	min: 1,
};

const SPECIFIC_LIMITATIONS: Limitations = {
	max: 80,
	min: 10,
};

export function useExerciseClient(
	operator: SelectedOperator
): ExerciseResponse {
	const [numbersData, setNumbersData] = useState<NumbersData>(
		{} as NumbersData
	);

	const getCalculationResult = operators.calculations[operator.id];

	const isDivisionOrMultiply = () => {
		return (
			operator.id === operators.type.division ||
			operator.id === operators.type.multiply
		);
	};

	// Lida com o resultado do exercicio, fazendo um tratamento.
	const handleResult = (firstNumber: number, secondNumber: number) => {
		const calculationResult = getCalculationResult({
			XNumber: firstNumber,
			YNumber: secondNumber,
		}).toString();

		if (isFloat(calculationResult)) {
			return Number(limitDecimalPlaces(calculationResult, MIN_DECIMAL_PLACES));
		}

		return Number(calculationResult);
	};

	const generateNumber = (limitations: Limitations) => {
		return generateRandomNumber(limitations.max, limitations.min, Math);
	};

	const getDataForExercise = () => {
		let firstNumber: number;
		let secondNumber: number;

		// "Deixa o exercício no modo fácil", limitando de forma específica os números.
		if (isDivisionOrMultiply()) {
			firstNumber = generateNumber(SPECIFIC_LIMITATIONS);
			secondNumber = generateNumber({ max: SPECIFIC_LIMITATIONS.min, min: 2 });
		} else {
			firstNumber = generateNumber(DEFAULT_LIMITATIONS);
			secondNumber = generateNumber({
				...DEFAULT_LIMITATIONS,
				max: firstNumber,
			});
		}

		const result = handleResult(firstNumber, secondNumber);

		setNumbersData({
			firstNumber,
			secondNumber,
			result,
		});
	};

	useEffect(() => getDataForExercise(), []);

	if (!numbersData.result) {
		return {
			error: {
				message: "Erro ao gerar exercício, verifique se escolheu as opções ",
			},
		};
	}

	return {
		data: {
			text: `Qual o resultado de ${numbersData.firstNumber} ${operator.symbol} ${numbersData.secondNumber}?`,
			result: numbersData.result?.toString(),
			getNextExercise: getDataForExercise,
		},
	};
}
