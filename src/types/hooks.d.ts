import { MutableRefObject } from "react";

export type CanvasRef = MutableRefObject<HTMLCanvasElement | null>;

export type ContextRef = MutableRefObject<CanvasRenderingContext2D | null>;

export interface CanvasStyle {
	width: number;
	color: string;
}
