import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import { Range } from "./Range";

const TITLE_TEXT = "Range";
const mockHandleChange = jest.fn();

function getRangeElement() {
	return screen.getByTitle(TITLE_TEXT);
}

describe("Range Component", () => {
	beforeEach(() =>
		render(<Range title={TITLE_TEXT} onChange={mockHandleChange} />)
	);
	afterEach(() => jest.clearAllMocks());

	describe("Render", () => {
		it("should render correctly", () => {
			expect(getRangeElement()).toBeInTheDocument();
		});
	});
	describe("Interaction", () => {
		describe("Change", () => {
			it("should handle the changes by calling the 'handleChange' function", () => {
				const range = getRangeElement();
				fireEvent.change(range, { target: { value: "2" } });

				expect(mockHandleChange).toBeCalledWith(2);
			});
		});
	});
});
