interface FloatNumberProperties {
	decimalPointIndex: number;
	numbersBeforeDecimalPoint: string;
	numbersAfterDecimalPoint: string;
}

export function generateRandomNumber(max: number, min: number, Math: Math) {
	return Math.floor(Math.random() * max + min);
}

export function isFloat(value: string) {
	return value.includes(".") || value.includes(",");
}

export function replaceCommaWithDot(value: string) {
	return value.replace(",", ".");
}

/**
 * Pegar informações de um número flutuante como Indíce do Ponto Decimal
 * e Números antes e depois do Ponto Decimal.
 * @param value [string] Número desejado.
 * @returns [object] Informações do número.
 */
export function getFloatNumberProperties(value: string): FloatNumberProperties {
	const formattedValue = replaceCommaWithDot(value);

	const decimalPointIndex = formattedValue.indexOf(".") + 1;
	const numbersBeforeDecimalPoint = value.slice(0, decimalPointIndex);
	const numbersAfterDecimalPoint = value.slice(decimalPointIndex);

	return {
		decimalPointIndex,
		numbersBeforeDecimalPoint,
		numbersAfterDecimalPoint,
	};
}

/**
 * Limita as casas decimais de um número.
 * @param value [string] Número para limitar.
 * @param decimalPlaces [number] Quantidade de casas decimais para manter no valor.
 * @returns Valor com casas decimais limitadas, ou o próprio valor se houver erro.
 */
export function limitDecimalPlaces(value: string, decimalPlaces: number) {
	const { decimalPointIndex, numbersAfterDecimalPoint } =
		getFloatNumberProperties(value);

	if (numbersAfterDecimalPoint.length < decimalPlaces) return value;

	return value.slice(0, decimalPointIndex + decimalPlaces);
}

/**
 * Verifica se um número flutuante tem quantidade de casas decimais desejadas.
 * @param value [string] Número para verificar.
 * @param decimalPlaces [number] Quantidade de casas decimais desejadas.
 * @returns [boolean] É válido ou não.
 */
export function floatNumberIsValid(value: string, decimalPlaces: number) {
	const { numbersAfterDecimalPoint } = getFloatNumberProperties(value);
	const decimalPlacesOfValue = numbersAfterDecimalPoint.length;

	return decimalPlacesOfValue >= decimalPlaces;
}
