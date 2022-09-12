import { getFloatNumberProperties } from "./handleNumbers";

const MIN_NUMBERS_AFTER_POINT = 2;

export function replaceCommaToDot(value: string) {
	return value.replaceAll(",", ".");
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

/*
	Pega a última pontuação digitada para verificar se a quantidade de números
	digitados após a pontuação está válida.
*/
export function isInvalidCurrencyValue(value: string) {
	const lastCommaIndex = value.lastIndexOf(",");
	const lastDotIndex = value.lastIndexOf(".");

	if (lastCommaIndex != -1 && lastDotIndex > lastCommaIndex) {
		const numbersAfterDot = value.slice(lastDotIndex + 1, value.length);

		return numbersAfterDot.length >= 3;
	}

	if (lastCommaIndex > lastDotIndex) {
		const numbersAfterComma = value.slice(lastCommaIndex + 1, value.length);

		return numbersAfterComma.length > MIN_NUMBERS_AFTER_POINT;
	}

	return false;
}

// Converte valor para Real(BRL).
export function currencyConvertBRL(value: string) {
	if (isInvalidCurrencyValue(value)) return undefined;

	const handleValueFormatting = () => {
		if (value.includes(",")) {
			// "Converte" para o padrão USA, para poder usar o Number.
			const valueFormatted = replaceCommaToDot(value.replaceAll(".", ""));

			return Number(valueFormatted);
		}

		return Number(value);
	};

	return `R$ ${handleValueFormatting().toLocaleString("pt-BR", {
		minimumFractionDigits: MIN_NUMBERS_AFTER_POINT,
	})}
		`;
}
