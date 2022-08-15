import { operators } from "../mocks";
import { generateRandomNumber, RandomNumberLimits } from "./handleNumbers";

/**
 * Gera dois números. O primeiro entre 2 e 100 e o segundo sendo menor que o primeiro
 * @returns [object] Números gerados
 */
function defaultGenerator() {
	const DEFAULT_LIMITS: RandomNumberLimits = { max: 100, min: 2 };

	const firstNumber = generateRandomNumber(DEFAULT_LIMITS, Math);
	const secondNumber = generateRandomNumber({ max: firstNumber, min: 2 }, Math);

	return {
		firstNumber,
		secondNumber,
	};
}

function handleAdditionGenerator() {
	const { firstNumber, secondNumber } = defaultGenerator();
	const result = firstNumber + secondNumber;

	return {
		firstNumber,
		secondNumber,
		result,
	};
}

function handleSubtractionGenerator() {
	const { firstNumber, secondNumber } = defaultGenerator();
	const result = firstNumber - secondNumber;

	return {
		firstNumber,
		secondNumber,
		result,
	};
}

/**
 * Gerador de divisão exata.
 * @returns [object] Números e resultado do cálculo.
 */
function handleDivisionGenerator() {
	const DIVISION_LIMITS: RandomNumberLimits = { max: 12, min: 2 };

	const firstNumberGenerated = generateRandomNumber(DIVISION_LIMITS, Math);
	const secondNumberGenerated = generateRandomNumber(DIVISION_LIMITS, Math);

	// Números gerados em lista para o divisor ser um desses números.
	const generatedNumbers = [firstNumberGenerated, secondNumberGenerated];
	const getValueFromList = () => {
		return generatedNumbers[
			generateRandomNumber({ max: generatedNumbers.length, min: 0 }, Math)
		];
	};

	// Em uma divisão, o dividendo é a multiplicação entre dois números.
	const firstNumber = firstNumberGenerated * secondNumberGenerated;
	/*
		Pega um dos números gerados anteriormente para ser o dividendo, assim
		resultando em uma divisão exata.
	*/
	const secondNumber = getValueFromList();
	const result = firstNumber / secondNumber;

	return {
		firstNumber,
		secondNumber,
		result,
	};
}

function handleMultiplyGenerator() {
	const MULTIPLY_LIMITS: RandomNumberLimits = { max: 50, min: 9 };

	const firstNumber = generateRandomNumber(MULTIPLY_LIMITS, Math);
	// Limites para o segundo número ser menor que o primeiro.
	const secondNumber = generateRandomNumber(
		{ max: MULTIPLY_LIMITS.min, min: 2 },
		Math
	);
	const result = firstNumber * secondNumber;

	return {
		firstNumber,
		secondNumber,
		result,
	};
}

export const calculationGenerators = {
	[operators.type.addition]: handleAdditionGenerator,
	[operators.type.subtraction]: handleSubtractionGenerator,
	[operators.type.division]: handleDivisionGenerator,
	[operators.type.multiply]: handleMultiplyGenerator,
};
