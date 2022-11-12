import { useEffect, useState } from "react";

import { SelectedOperator } from "@contexts/ExercisePreferences";
import { calculationGenerators } from "@utils/calculationGenerators";
import type { IExerciseResponse } from "@interfaces/IExercise";

type NumberState = number | null;

interface NumbersData {
	firstNumber: NumberState;
	secondNumber: NumberState;
	result: NumberState;
}

export function useExerciseClient(
	operator: SelectedOperator
): IExerciseResponse {
	const [numbersData, setNumbersData] = useState<NumbersData>(
		{} as NumbersData
	);

	const getCalculationData = () => {
		// Chama a função responsável por retornar os dados de cálculos para cada operador.
		const { firstNumber, secondNumber, result } =
			calculationGenerators[operator.id]();

		// Gerar novos números se os números gerados forem iguais aos atuais.
		if (
			firstNumber === numbersData.firstNumber ||
			secondNumber === numbersData.secondNumber
		) {
			getCalculationData();
			return;
		}

		setNumbersData({
			firstNumber,
			secondNumber,
			result,
		});
	};

	const isValid = () => !!operator.id;

	useEffect(() => {
		if (!isValid()) return;

		getCalculationData();
	}, []);

	if (!isValid()) {
		return {
			error: {
				message: "Verifique se escolheu as opções corretamente",
			},
		};
	}

	if (!Object.values(numbersData)[0]) {
		return {
			error: undefined,
			data: undefined,
			loading: true,
		};
	}

	return {
		data: {
			text: `Qual o resultado de ${numbersData.firstNumber} ${operator.symbol} ${numbersData.secondNumber}?`,
			result: numbersData.result!.toString(),
			getNextExercise: getCalculationData,
		},
	};
}
