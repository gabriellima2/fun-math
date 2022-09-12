import { ApolloError } from "@apollo/client";
import { MutableRefObject } from "react";

import { CanvasElement } from ".";

export type CanvasRef = MutableRefObject<CanvasElement>;

export type Context2DRef = MutableRefObject<CanvasRenderingContext2D | null>;

export interface StylesForCanvasContext {
	width: number;
	color: string;
}

export interface ExerciseData {
	id?: string | undefined;
	text: string;
	tip?: string | undefined;
	result: string;
	type: "currency" | "decimal" | "normal";
	getNextExercise: () => void;
}

interface Error {
	message: string;
}

export type ExerciseDataResponse = Omit<ExerciseData, "type">;

export interface ExerciseResponse {
	loading?: boolean;
	error?: ApolloError | Error;
	data?: ExerciseDataResponse;
}
