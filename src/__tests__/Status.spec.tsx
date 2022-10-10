import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

import { Status } from "../components/Status";

import {
	CurrentExerciseContext,
	CurrentExerciseContextProperties,
} from "../contexts/CurrentExerciseContext";
import { ExerciseData } from "../types/hooks";

describe("Status Component", () => {
	function renderComponent(status: boolean | null) {
		const mockFn = jest.fn();
		const CurrentExerciseContextMock: CurrentExerciseContextProperties = {
			userAnswerIsCorrect: status,
			currentExercise: {} as ExerciseData,
			clearCorrection: mockFn,
			correctExercise: mockFn,
			addCurrentExercise: mockFn,
		};

		render(
			<CurrentExerciseContext.Provider value={CurrentExerciseContextMock}>
				<Status>Testing</Status>
			</CurrentExerciseContext.Provider>
		);
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
