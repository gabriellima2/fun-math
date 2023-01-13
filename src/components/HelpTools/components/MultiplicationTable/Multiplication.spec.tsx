import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { Multiplication } from "./Multiplication";

const MULTIPLICAND = 5;

function createSentence(multiplier: number) {
	return `${MULTIPLICAND} X ${multiplier} = ${MULTIPLICAND * multiplier}`;
}

function renderMultiplicationComponent(multiplier: number) {
	render(
		<Multiplication multiplicand={MULTIPLICAND} multiplier={multiplier} />
	);
}

describe("Multiplication Component", () => {
	describe("Render", () => {
		it("should render correctly", () => {
			const multiplier = 10;
			renderMultiplicationComponent(multiplier);

			expect(screen.getByText(createSentence(multiplier))).toBeInTheDocument();
		});
		it("should render nothing if multiplier is zero", () => {
			const multiplier = 0;
			renderMultiplicationComponent(multiplier);

			expect(
				screen.queryByText(createSentence(multiplier))
			).not.toBeInTheDocument();
		});
	});
});
