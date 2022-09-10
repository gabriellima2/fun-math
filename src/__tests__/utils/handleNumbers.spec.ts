import "@testing-library/jest-dom";
import { getFloatNumberProperties } from "../../utils/handleNumbers";

const VALUE = "18,200";

describe("Return from Get Float Number Properties function", () => {
	const properties = getFloatNumberProperties(VALUE);

	it("should have returned value 3 for the decimal point index", () => {
		expect(properties.decimalPointIndex).toBe(3);
	});

	it("should have returned value 18 for numbers before decimal point", () => {
		expect(properties.numbersBeforeDecimalPoint).toBe("18");
	});

	it("should have returned value 200 for numbers after decimal point", () => {
		expect(properties.numbersAfterDecimalPoint).toBe("200");
	});
});
