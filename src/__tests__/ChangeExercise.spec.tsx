import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { ChangeExercise } from "../components/Exercise";

import {
	CurrentExerciseContext,
	CurrentExerciseContextProperties,
} from "../contexts/CurrentExerciseContext";
import type { ExerciseData } from "../types/hooks";

const EXERCISE_SKIP_TEXT = /Pular/;
const EXERCISE_NEXT_TEXT = /Próximo/;

describe("Change Exercise Component", () => {
	const handleClickMock = jest.fn();

	function renderComponent(userAnswerIsCorrect: boolean | null) {
		const mockFn = jest.fn();
		const CurrentExerciseContextMock: CurrentExerciseContextProperties = {
			userAnswerIsCorrect,
			currentExercise: {} as ExerciseData,
			clearCorrection: mockFn,
			correctExercise: mockFn,
			addCurrentExercise: mockFn,
		};

		render(
			<CurrentExerciseContext.Provider value={CurrentExerciseContextMock}>
				<ChangeExercise onClick={handleClickMock} />
			</CurrentExerciseContext.Provider>
		);
	}

	it("should called function when clicked", async () => {
		renderComponent(null);

		const changeExerciseButton = screen.getByText(EXERCISE_SKIP_TEXT);
		await userEvent.click(changeExerciseButton);

		expect(handleClickMock).toHaveBeenCalledTimes(1);
	});

	describe("Variants", () => {
		it("should show skip exercise if user answer is empty", () => {
			renderComponent(null);

			expect(screen.getByText(EXERCISE_SKIP_TEXT)).toBeInTheDocument();
		});

		it("should show skip exercise if user answer is incorrect", () => {
			renderComponent(false);

			expect(screen.getByText(EXERCISE_SKIP_TEXT)).toBeInTheDocument();
		});

		it("should show skip exercise if user answer is correct", () => {
			renderComponent(true);

			expect(screen.getByText(EXERCISE_NEXT_TEXT)).toBeInTheDocument();
		});
	});
});
