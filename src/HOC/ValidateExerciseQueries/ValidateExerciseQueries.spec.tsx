import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

import { ComponentMock } from "src/__mocks__/ComponentMock";
import { mockUseRouter } from "src/__mocks__/mockUseRouter";
import { ValidateExerciseQueries } from ".";

interface Queries {
	type?: string | string[];
	operator?: string | string[];
}

function renderComponentUsingQuery(query: Queries) {
	mockUseRouter({
		route: "/fazer-exercicios",
		pathname: "/fazer-exercicios",
		query,
		asPath: "/fazer-exercicios",
	});

	render(<Component injectedProps={{}} />);
}

const COMPONENT_MOCK_TEXT = "Success";
const ERROR_CODE_TEXT = "404";

const Component = ValidateExerciseQueries(() => (
	<ComponentMock text={COMPONENT_MOCK_TEXT} />
));

describe("Validate Queries From URL High Order Component", () => {
	describe("Validation", () => {
		describe("Success", () => {
			it("should render correctly if passing 'random' exercise and operator filled", () => {
				renderComponentUsingQuery({ type: "random", operator: "addition" });

				expect(screen.getByText(COMPONENT_MOCK_TEXT)).toBeInTheDocument();
				expect(screen.queryByText(ERROR_CODE_TEXT)).not.toBeInTheDocument();
			});

			it("should render correctly if passing 'problem' exercise", () => {
				renderComponentUsingQuery({ type: "problem" });

				expect(screen.getByText(COMPONENT_MOCK_TEXT)).toBeInTheDocument();
				expect(screen.queryByText(ERROR_CODE_TEXT)).not.toBeInTheDocument();
			});
		});

		describe("Error", () => {
			it("should render error if passing array to queries", () => {
				renderComponentUsingQuery({
					type: ["random", "problem"],
					operator: ["addition", "multyply"],
				});

				expect(screen.getByText(ERROR_CODE_TEXT)).toBeInTheDocument();
				expect(screen.queryByText(COMPONENT_MOCK_TEXT)).not.toBeInTheDocument();
			});

			it("should render error if passing empty queries", () => {
				renderComponentUsingQuery({ type: "", operator: "" });

				expect(screen.getByText(ERROR_CODE_TEXT)).toBeInTheDocument();
				expect(screen.queryByText(COMPONENT_MOCK_TEXT)).not.toBeInTheDocument();
			});

			it("should render error if passing type needs required operator", () => {
				renderComponentUsingQuery({ type: "random", operator: "" });

				expect(screen.getByText(ERROR_CODE_TEXT)).toBeInTheDocument();
				expect(screen.queryByText(COMPONENT_MOCK_TEXT)).not.toBeInTheDocument();
			});

			it("should render error if passing type does not need operator", () => {
				renderComponentUsingQuery({ type: "problem", operator: "addition" });

				expect(screen.getByText(ERROR_CODE_TEXT)).toBeInTheDocument();
				expect(screen.queryByText(COMPONENT_MOCK_TEXT)).not.toBeInTheDocument();
			});
		});
	});
});
