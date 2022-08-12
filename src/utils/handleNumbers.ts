import { replaceCommaToDot } from "./formatNumbers";

interface FloatNumberProperties {
	decimalPointIndex: number;
	numbersBeforeDecimalPoint: string;
	numbersAfterDecimalPoint: string;
}

export interface RandomNumberLimits {
	max: number;
	min: number;
}

export function generateRandomNumber(
	{ max, min }: RandomNumberLimits,
	Math: Math
) {
	return Math.floor(Math.random() * max + min);
}

/**
 * Pegar informações de um número flutuante como Indíce do Ponto Decimal
 * e Números antes e depois do Ponto Decimal.
 * @param value [string] Número desejado.
 * @returns [object] Informações do número.
 */
export function getFloatNumberProperties(value: string): FloatNumberProperties {
	const formattedValue = replaceCommaToDot(value);

	const decimalPointIndex = formattedValue.indexOf(".") + 1;
	const numbersBeforeDecimalPoint = value.slice(0, decimalPointIndex);
	const numbersAfterDecimalPoint = value.slice(decimalPointIndex);

	return {
		decimalPointIndex,
		numbersBeforeDecimalPoint,
		numbersAfterDecimalPoint,
	};
}
