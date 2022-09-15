export function formatToBRLCurrency(value: string) {
	/* Consideramos que o formato está certo se for menor que 1000 e tiver
	vírgula, então adicionamos o cifrão. */
	if (value.includes(",")) {
		const valueWithoutFractions = value.slice(0, value.indexOf(","));

		if (Number(valueWithoutFractions) < 1000) return `R$ ${value}`;
	}

	value = value.replace(",", "").replace(/\D/g, "");

	const formattedValue = new Intl.NumberFormat("pt-BR", {
		style: "currency",
		currency: "BRL",
	}).format(Number(value));

	return formattedValue;
}
