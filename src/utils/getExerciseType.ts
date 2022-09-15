// Valores decimais: 0.1 | 1.0 | 10.0 | 100.0...
function isDecimal(value: string) {
	if (value.endsWith(".") || value.startsWith(".")) return false;

	return value.includes(".");
}

// Padrão feito no GraphCMS! Valores monetários: R$ 1,00 | R$ 10,00...
function isCurrency(value: string) {
	return value.includes("R$");
}

export function getExerciseType(value: string) {
	if (isCurrency(value)) return "currency";

	if (isDecimal(value)) return "decimal";

	return "normal";
}
