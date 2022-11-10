import type { MouseEvent, MutableRefObject } from "react";
import type { ICanvas } from "@interfaces/ICanvas";
import type { RefType } from "@types/TGlobals";

export type CanvasEvent = MouseEvent | globalThis.MouseEvent;

export type CanvasElement = RefType<HTMLCanvasElement>;

export type CanvasUtilsRef = RefType<ICanvas>;

export type CanvasRef = MutableRefObject<CanvasElement>;

export type Context2DRef = MutableRefObject<CanvasRenderingContext2D | null>;
