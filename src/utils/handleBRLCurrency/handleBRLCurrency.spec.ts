import "@testing-library/jest-dom";

import { handleBRLCurrency } from ".";

const SPACE = "\xa0";

describe("Handle BRL Currency function", () => {
	it("should format correctly", () => {
		const VALUE = "190";

		expect(handleBRLCurrency(VALUE)).toBe(`R$${SPACE}190,00`);
	});
});
