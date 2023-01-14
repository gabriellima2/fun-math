import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

import { GetExerciseService, GetExerciseServiceProps } from ".";

function renderComponent({ injectedProps }: GetExerciseServiceProps) {
	render(<Component injectedProps={injectedProps} />);
}

const Component = GetExerciseService(() => <p>{COMPONENT_MOCK_TEXT}</p>);

const COMPONENT_MOCK_TEXT = "Value is valid!";
const ERROR_CODE_TEXT = "404";

describe("Handle Generate Exercise High Order Component", () => {
	describe("Validation", () => {
		describe("Success", () => {
			it("should render correctly if passing 'random' exercise", () => {
				renderComponent({
					injectedProps: { type: "random", operator: "addition" },
				});

				expect(screen.getByText(COMPONENT_MOCK_TEXT)).toBeInTheDocument();
				expect(screen.queryByText(ERROR_CODE_TEXT)).not.toBeInTheDocument();
			});

			it("should render correctly if passing 'problem' exercise", () => {
				renderComponent({
					injectedProps: { type: "problem" },
				});

				expect(screen.getByText(COMPONENT_MOCK_TEXT)).toBeInTheDocument();
				expect(screen.queryByText(ERROR_CODE_TEXT)).not.toBeInTheDocument();
			});
		});

		describe("Error", () => {
			it("should render error if passing empty values", () => {
				renderComponent({
					injectedProps: { type: "", operator: "" },
				});

				expect(screen.getByText(ERROR_CODE_TEXT)).toBeInTheDocument();
				expect(screen.queryByText(COMPONENT_MOCK_TEXT)).not.toBeInTheDocument();
			});

			it("should render error if passing unavailable values", () => {
				renderComponent({
					injectedProps: { type: "unavailable", operator: "value" },
				});

				expect(screen.getByText(ERROR_CODE_TEXT)).toBeInTheDocument();
				expect(screen.queryByText(COMPONENT_MOCK_TEXT)).not.toBeInTheDocument();
			});
		});
	});
});
