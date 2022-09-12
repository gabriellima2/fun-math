// Valores decimais: 0.1 | 1.0 | 10.0 | 100.0...
export function isDecimal(value: string) {
	if (value.endsWith(".") || value.startsWith(".")) return false;

	return value.includes(".");
}

// Padrão feito no GraphCMS! Valores monetários: R$ 1,00 | R$ 10,00...
export function isCurrency(value: string) {
	return value.includes("R$");
}
