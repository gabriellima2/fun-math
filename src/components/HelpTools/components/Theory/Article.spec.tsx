import { render, screen } from "@testing-library/react";
import { Article } from "./Article";

const mockArticleProps: Parameters<typeof Article>[0] = {
	title: "Title Mock",
	paragraph: "Paragraph Mock",
};

describe("Article Component", () => {
	beforeEach(() => render(<Article {...mockArticleProps} />));

	describe("Render", () => {
		it("should render correctly", () => {
			expect(screen.getByText(mockArticleProps.title)).toBeInTheDocument();
			expect(screen.getByText(mockArticleProps.paragraph)).toBeInTheDocument();
		});
	});
});
