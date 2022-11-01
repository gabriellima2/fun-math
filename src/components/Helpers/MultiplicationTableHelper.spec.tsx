import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { MultiplicationTableHelper } from "./MultiplicationTableHelper";

const INITIAL_TEXT = /Digite o número acima!/;

function getInput() {
	return screen.getByPlaceholderText(/Digite aqui.../);
}

describe("Multiplication Table Helper Component", () => {
	beforeEach(() => {
		render(<MultiplicationTableHelper.Content />);
	});

	it("should render the component", () => {
		expect(screen.getByText(INITIAL_TEXT)).toBeInTheDocument();
	});

	it("should show the multiplication table of the number typed", async () => {
		await userEvent.type(getInput(), "2");

		expect(screen.queryByText(INITIAL_TEXT)).not.toBeInTheDocument();
		expect(screen.getByText(/Tabuada do 2:/)).toBeInTheDocument();
		expect(screen.getByText(/2 X 1 = 2/)).toBeInTheDocument();
	});
});
