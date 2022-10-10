import "@testing-library/jest-dom";

import React from "react";
import userEvent from "@testing-library/user-event";
import { render, screen } from "@testing-library/react";

import { Input } from "../components/Inputs";

const PLACEHOLDER_TEXT = "Testing";
const TYPED_VALUE = "Input Test";

function getTextInput() {
	return screen.getByPlaceholderText(PLACEHOLDER_TEXT);
}

describe("Text Input Component", () => {
	const setStateMock = jest.fn();

	jest.mock("react", () => ({
		useState: (initial: unknown) => [initial, setStateMock],
	}));

	beforeEach(() => {
		render(
			<Input.Text
				id="text"
				name="text"
				value=""
				onChange={setStateMock}
				placeholder={PLACEHOLDER_TEXT}
			>
				Test
			</Input.Text>
		);
	});

	it("should render the component", () => {
		expect(getTextInput()).toBeInTheDocument();
	});

	it("should handle changes in input", async () => {
		await userEvent.type(getTextInput(), TYPED_VALUE);

		expect(setStateMock).toHaveBeenCalledTimes(TYPED_VALUE.length);
	});
});
