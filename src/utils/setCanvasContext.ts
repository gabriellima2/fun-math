import { CanvasRef, ContextRef } from "../types/hooks";

interface Styles {
	color: string;
	width: number;
}

export function setCanvasContext(
	canvasRef: CanvasRef,
	contextRef: ContextRef,
	styles: Styles
) {
	const ctx = canvasRef.current?.getContext("2d");

	if (!ctx) return;

	ctx.scale(1, 1);
	ctx.lineCap = "round";
	ctx.strokeStyle = styles.color;
	ctx.lineWidth = styles.width;

	contextRef.current = ctx;
}
