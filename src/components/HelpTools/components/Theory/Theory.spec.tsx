import { render, screen } from "@testing-library/react";
import { Theory } from "./Theory";

describe("Theory Component", () => {
	beforeEach(() =>
		render(
			<>
				<Theory.ButtonContent />
				<Theory.Content />
			</>
		)
	);

	describe("Render", () => {
		it("should render correctly", () => {
			expect(screen.getByText("Teoria")).toBeInTheDocument();
			expect(screen.getByText("Adição")).toBeInTheDocument();
			expect(screen.getByText("Subtração")).toBeInTheDocument();
			expect(screen.getByText("Divisão")).toBeInTheDocument();
			expect(screen.getByText("Multiplicação")).toBeInTheDocument();
		});
	});
});
