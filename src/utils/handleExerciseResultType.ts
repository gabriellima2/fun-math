// Valores decimais: 0.1 | 1.0 | 10.0 | 100.0...
export function isDecimal(value: string) {
	if (value.endsWith(".") || value.startsWith(".")) return false;

	return value.includes(".");
}

// Padrão feito no GraphCMS! Valores monetários: 1,00 | 10,00 | 100,00 | 1.000,00...
export function isCurrency(value: string) {
	if (value.endsWith(",") || value.startsWith(",")) return false;

	return value.includes(",");
}
