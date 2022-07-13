import { useEffect, useRef, useState } from "react";

import { CanvasRef } from "../types/hooks";

const SPACING = 50;

export function useCanvas(canvasRef: CanvasRef, canvasBackgroundColor: string) {
	const contextRef = useRef<null | CanvasRenderingContext2D>(null);
	const [currentColor, setCurrentColor] = useState("#ffffff");
	const [strokeWidth, setStrokeWidth] = useState("5");

	const changeCurrentColor = (color: string) => setCurrentColor(color);

	const changeStrokeWidth = (width: string) => setStrokeWidth(width);

	const activateEraser = () => setCurrentColor(canvasBackgroundColor);

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
		context.strokeStyle = currentColor;
		context.lineWidth = Number(strokeWidth);

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

	useEffect(
		() => setContextSettings(canvasRef.current.getContext("2d")),
		[currentColor, strokeWidth]
	);

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
		styles: {
			currentColor,
			strokeWidth,
			changeCurrentColor,
			changeStrokeWidth,
		},
		activateEraser,
	};
}
