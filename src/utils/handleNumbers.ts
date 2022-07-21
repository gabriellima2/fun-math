interface FloatNumberProperties {
	decimalPointIndex: number;
	numbersBeforeDecimalPoint: string;
	numbersAfterDecimalPoint: string;
}

export function generateRandomNumber(max = 100, min = 1) {
	return Math.floor(Math.random() * max + min);
}

export function replaceCommaWithDot(value: string) {
	return value.replace(",", ".");
}

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

export function limitDecimalPlaces(value: string, decimalPlaces: number) {
	const { decimalPointIndex, numbersAfterDecimalPoint } =
		getFloatNumberProperties(value);

	if (numbersAfterDecimalPoint.length < decimalPlaces) return value;

	return value.slice(0, decimalPointIndex + decimalPlaces);
}
