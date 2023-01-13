import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { Step } from "./Step";

const mockStepProps: Parameters<typeof Step>[0] = {
	iconURL: "/public/operators/division.svg",
	title: "Mock Title",
	description: "Mock Description",
};

describe("Step Component", () => {
	beforeEach(() => render(<Step {...mockStepProps} />));

	describe("Render", () => {
		it("should render correctly", () => {
			expect(
				screen.getByAltText(`Icone do Card ${mockStepProps.title}`)
			).toBeInTheDocument();
			expect(screen.getByText(mockStepProps.title)).toBeInTheDocument();
			expect(screen.getByText(mockStepProps.description)).toBeInTheDocument();
		});
	});
});
