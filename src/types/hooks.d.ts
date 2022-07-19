import { MutableRefObject } from "react";

export type CanvasRef = MutableRefObject<HTMLCanvasElement | null>;

export type ContextRef = MutableRefObject<CanvasRenderingContext2D | null>;

export interface CanvasStyle {
	width: number;
	color: string;
}

export type GetCorrectResult = () => string | null | undefined;

export interface Exercise {
	description: string;
	userAnswerIsCorrect: boolean | null;
	checkUserAnswer: (
		userAnswer: string,
		getCorrectResult: GetCorrectResult
	) => void;
	getNextExercise: () => void;
	getCorrectResult: GetCorrectResult;
}

export interface ExerciseGenerator
	extends Omit<Exercise, "checkUserAnswer" | "userAnswerIsCorrect"> {
	getCorrectResult: GetCorrectResult;
}
