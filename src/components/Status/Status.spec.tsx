import "@testing-library/jest-dom";
import { screen } from "@testing-library/react";

import { Status } from ".";

import { currentExerciseContextMock } from "src/__mocks__/currentExerciseContextMock";

describe("Status Component", () => {
	function renderComponent(status: boolean | null) {
		// Usa o mock do contexto para renderizar o componente
		currentExerciseContextMock.renderComponent({
			component: <Status>Testing</Status>,
			value: {
				...currentExerciseContextMock.value,
				userAnswerIsCorrect: status,
			},
		});
	}

	it("should render without status", () => {
		renderComponent(null);

		expect(screen.getByLabelText(/Nenhuma resposta/)).toBeInTheDocument();
	});

	it("should render with correct", () => {
		renderComponent(true);

		expect(screen.getByLabelText(/Resposta certa/)).toBeInTheDocument();
	});

	it("should render with incorrect", () => {
		renderComponent(false);

		expect(screen.getByLabelText(/Resposta errada/)).toBeInTheDocument();
	});
});
