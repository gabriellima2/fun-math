import { useEffect, useRef, useState } from "react";

import { CanvasRef, ContextRef } from "../types/hooks";

export interface ITools {
	currentColor: string;
	strokeWidth: number;
	changeCurrentColor: (color: string) => void;
	changeStrokeWidth: (width: string) => void;
	changeCurrentObject: (object: string) => void;
}

export function useCanvas(canvasRef: CanvasRef, canvasBackgroundColor: string) {
	const contextRef = useRef<null | CanvasRenderingContext2D>(null);

	const [currentColor, setCurrentColor] = useState("#ffffff");
	const [strokeWidth, setStrokeWidth] = useState(5);

	const changeCurrentColor = (color: string) => setCurrentColor(color);

	const changeStrokeWidth = (width: string) => setStrokeWidth(Number(width));

	const changeCurrentObject = (object: string) => {
		console.log(object);

		if (object === "eraser") {
			return setCurrentColor(canvasBackgroundColor);
		}

		setCurrentColor("#ffffff");
	};

	const setContextInitialSettings = (
		contextRef: ContextRef,
		ctx: CanvasRenderingContext2D
	) => {
		ctx.scale(1, 1);
		ctx.lineCap = "round";
		ctx.strokeStyle = currentColor;
		ctx.lineWidth = strokeWidth;

		contextRef.current = ctx;
	};

	const setCanvasSize = (canvas: HTMLCanvasElement) => {
		const clientWidth = window.innerWidth;
		const clientHeight = window.innerHeight / 1.3;

		canvas.width = clientWidth;
		canvas.height = clientHeight;

		canvas.style.width = `${clientWidth}px;`;
		canvas.style.height = `${clientHeight}px;`;
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

	const contextSettings = () => {
		const context = canvasRef.current?.getContext("2d");

		if (!context) return;

		setContextInitialSettings(contextRef, context);
	};

	useEffect(() => {
		contextSettings();
	}, [currentColor, strokeWidth]);

	useEffect(() => {
		const canvas = canvasRef.current;
		const context = canvas?.getContext("2d");

		if (!canvas || !context) return;

		setCanvasSize(canvas);
		contextSettings();

		canvas.addEventListener("resize", () => handleResized(canvas, context));

		return () =>
			canvas.removeEventListener("resize", () =>
				handleResized(canvas, context)
			);
	}, []);

	return {
		contextRef,
		tools: {
			currentColor,
			strokeWidth,
			changeCurrentColor,
			changeCurrentObject,
			changeStrokeWidth,
		},
	};
}
