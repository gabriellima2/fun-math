import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import { ColorPicker } from "./ColorPicker";

const TITLE_TEXT = "Selecionar a cor";

function getColorPickerElement() {
	return screen.getByTitle("Selecionar a cor");
}

describe("Color Picker Component", () => {
	const mockSetState = jest.fn();
	jest.mock("react", () => ({
		useState: (initial: unknown) => [initial, mockSetState],
	}));

	beforeEach(() =>
		render(<ColorPicker value="" onChange={mockSetState} title={TITLE_TEXT} />)
	);
	afterEach(() => jest.clearAllMocks());

	describe("Render", () => {
		it("should render correctly", () => {
			expect(getColorPickerElement()).toBeInTheDocument();
		});
	});
	describe("Interaction", () => {
		describe("Change", () => {
			it("should handle the changes by calling the function", () => {
				const colorPicker = getColorPickerElement();
				fireEvent.change(colorPicker, { target: { value: "#ffffff" } });

				expect(mockSetState).toHaveBeenCalled();
			});
		});
	});
});
