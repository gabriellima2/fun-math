import { useEffect, useRef } from "react";

import { CanvasRef, CanvasStyle } from "../types/hooks";

const SPACING = 50;

export function useCanvas(canvasRef: CanvasRef, style: CanvasStyle) {
	const contextRef = useRef<null | CanvasRenderingContext2D>(null);

	const setCanvasSize = (canvas: HTMLCanvasElement) => {
		const clientWidth = window.innerWidth - SPACING;
		const clientHeight = window.innerHeight - SPACING;

		canvas.width = clientWidth;
		canvas.height = clientHeight;

		canvas.style.width = `${clientWidth}px;`;
		canvas.style.height = `${clientHeight}px;`;
	};

	const setContextSettings = (context: CanvasRenderingContext2D) => {
		context.scale(1, 1);
		context.lineCap = "round";
		context.strokeStyle = style.color;
		context.lineWidth = style.width;

		contextRef.current = context;
	};

	// Faz "backup" do conteúdo do canvas e redimensiona o canvas.
	const handleResized = (
		canvas: HTMLCanvasElement,
		context: CanvasRenderingContext2D
	) => {
		const canvasWidth = canvas.width;
		const canvasHeight = canvas.height;

		const canvasBackup = context.getImageData(0, 0, canvasWidth, canvasHeight);

		setCanvasSize(canvas);
		context.putImageData(canvasBackup, 0, 0);
	};

	useEffect(() => {
		const canvas = canvasRef.current;
		const context = canvas?.getContext("2d");

		if (!canvas || !context) return;

		setCanvasSize(canvas);
		setContextSettings(context);

		canvas.addEventListener("resize", () => handleResized(canvas, context));

		return () =>
			canvas.removeEventListener("resize", () =>
				handleResized(canvas, context)
			);
	}, []);

	return {
		contextRef,
	};
}
