import "@testing-library/jest-dom";
import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { ChangeExercise } from ".";

import { currentExerciseContextMock } from "src/__mocks__/currentExerciseContextMock";

const EXERCISE_SKIP_TEXT = /Pular/;
const EXERCISE_NEXT_TEXT = /Próximo/;

describe("Change Exercise Component", () => {
	const handleClickMock = jest.fn();

	function renderComponent(userAnswerIsCorrect: boolean | null) {
		// Usa o mock do contexto para renderizar o componente
		currentExerciseContextMock.renderComponent({
			component: <ChangeExercise onClick={handleClickMock} />,
			value: {
				...currentExerciseContextMock.value,
				userAnswerIsCorrect,
			},
		});
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
