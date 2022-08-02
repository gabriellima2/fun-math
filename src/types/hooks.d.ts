import { MutableRefObject } from "react";

import { CanvasElement } from ".";

export type CanvasRef = MutableRefObject<CanvasElement>;

export type ContextRef = MutableRefObject<CanvasRenderingContext2D | null>;

export interface CanvasStyle {
	width: number;
	color: string;
}

export interface ExerciseMode {
	text: string;
	tip: string | null;
	result: string;
	getNextExercise: () => void;
}
