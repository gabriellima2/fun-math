import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { MultiplicationTable } from "./MultiplicationTable";

const PLACEHOLDER_TEXT = "Digite aqui o número...";

describe("Multiplication Table Component", () => {
	beforeEach(() => {
		render(
			<>
				<MultiplicationTable.Content />
				<MultiplicationTable.ButtonContent />
			</>
		);
	});

	describe("Render", () => {
		it("should render correctly", () => {
			expect(screen.getByText("Tabuada")).toBeInTheDocument();
			expect(screen.getByPlaceholderText(PLACEHOLDER_TEXT)).toBeInTheDocument();
			expect(screen.getByTestId("numbers-section")).toBeInTheDocument();
		});
	});

	describe("Interactions", () => {
		describe("Typed Number", () => {
			it("should accept numbers less than 100", async () => {
				const input = screen.getByPlaceholderText(PLACEHOLDER_TEXT);
				const TYPED_VALUE = "10";

				await userEvent.type(input, TYPED_VALUE);

				expect(screen.getByDisplayValue(TYPED_VALUE)).toBeInTheDocument();
			});

			it("should not accept numbers greater than 100", async () => {
				const input = screen.getByPlaceholderText(PLACEHOLDER_TEXT);
				const TYPED_VALUE = "200";

				await userEvent.type(input, TYPED_VALUE);

				expect(screen.queryByDisplayValue(TYPED_VALUE)).not.toBeInTheDocument();
			});
		});

		describe("Multiplication", () => {
			it("should show the multiplication table of the 4", async () => {
				const input = screen.getByPlaceholderText(PLACEHOLDER_TEXT);

				await userEvent.type(input, "4");

				expect(screen.getByDisplayValue("4")).toBeInTheDocument();
				expect(screen.getByText("4 X 1 = 4")).toBeInTheDocument();
				expect(screen.getByText("4 X 2 = 8")).toBeInTheDocument();
				expect(screen.getByText("4 X 3 = 12")).toBeInTheDocument();
				expect(screen.getByText("4 X 4 = 16")).toBeInTheDocument();
				expect(screen.getByText("4 X 5 = 20")).toBeInTheDocument();
				expect(screen.getByText("4 X 6 = 24")).toBeInTheDocument();
				expect(screen.getByText("4 X 7 = 28")).toBeInTheDocument();
				expect(screen.getByText("4 X 8 = 32")).toBeInTheDocument();
				expect(screen.getByText("4 X 9 = 36")).toBeInTheDocument();
				expect(screen.getByText("4 X 10 = 40")).toBeInTheDocument();
			});
		});
	});
});
