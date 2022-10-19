import type { ReactNode } from "react";
import { render } from "@testing-library/react";

import {
	CurrentExerciseContext,
	CurrentExerciseContextProperties,
} from "@contexts/CurrentExerciseContext";

import type { ExerciseData } from "@hookTypes";

const methodsMock = jest.fn();

const value: CurrentExerciseContextProperties = {
	userAnswerIsCorrect: null,
	currentExercise: {} as ExerciseData,
	clearCorrection: methodsMock,
	correctExercise: methodsMock,
	addCurrentExercise: methodsMock,
};

interface RenderComponentProps {
	component: ReactNode;
	value: CurrentExerciseContextProperties;
}

function renderComponent(props: RenderComponentProps) {
	render(
		<CurrentExerciseContext.Provider value={props.value}>
			{props.component}
		</CurrentExerciseContext.Provider>
	);
}

export const currentExerciseContextMock = { renderComponent, value };
