import "@testing-library/jest-dom";

import { formatToBRLCurrency } from "../../utils/formatToBRLCurrency";

const SPACE = "\xa0";

describe("Format To BRL Currency function", () => {
	it("should format correctly", () => {
		const VALUE = "190";

		expect(formatToBRLCurrency(VALUE)).toBe(`R$${SPACE}190,00`);
	});
});
