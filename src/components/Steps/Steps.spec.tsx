import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { Steps } from "./Steps";

const TITLE = "Title";
const DESCRIPTION = "Description";

const mockStepsProps: Parameters<typeof Steps>[0] = {
	steps: [
		{
			title: TITLE,
			description: DESCRIPTION,
			iconURL: "/public/operators/addition.svg",
		},
	],
};

describe("Steps Component", () => {
	beforeEach(() => render(<Steps {...mockStepsProps} />));

	describe("Render", () => {
		it("should render correctly", () => {
			expect(screen.getByAltText(`Icone do Card ${TITLE}`)).toBeInTheDocument();
			expect(screen.getByText(TITLE)).toBeInTheDocument();
			expect(screen.getByText(DESCRIPTION)).toBeInTheDocument();
		});
	});
});
