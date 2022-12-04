import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

import { Status } from "./Status";

describe("Status Component", () => {
	describe("Render", () => {
		beforeEach(() => render(<Status status={null} />));

		it("should render", () => {
			expect(screen.getByRole("status")).toBeInTheDocument();
		});
	});

	describe("Message based status", () => {
		describe("Correct", () => {
			beforeEach(() => render(<Status status="correct" />));

			it("should render with correct status", () => {
				expect(screen.getByLabelText("correto")).toBeInTheDocument();
				expect(screen.getByText("👍 Certo!")).toBeInTheDocument();
			});
		});

		describe("Incorrect", () => {
			beforeEach(() => render(<Status status="incorrect" />));

			it("should render with correct status", () => {
				expect(screen.getByLabelText("incorreto")).toBeInTheDocument();
				expect(screen.getByText("😞 Errado!")).toBeInTheDocument();
			});
		});
	});
});
