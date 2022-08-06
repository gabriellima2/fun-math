import { ApolloError } from "@apollo/client";
import { MutableRefObject } from "react";

import { CanvasElement } from ".";

export type CanvasRef = MutableRefObject<CanvasElement>;

export type Context2DRef = MutableRefObject<CanvasRenderingContext2D | null>;

export interface StylesForCanvasContext {
	width: number;
	color: string;
}

export interface ExerciseMode {
	id?: string;
	text: string;
	tip?: string;
	result: string;
	getNextExercise: () => void;
}

interface Error {
	message: string;
}

export interface ExerciseResponse {
	loading?: boolean;
	error?: ApolloError | Error;
	data?: ExerciseMode;
}
