import { useEffect, useRef } from "react";

import { CanvasRef } from "../../types/hooks";
import { setCanvasContext } from "../../utils/setCanvasContext";

import { tools } from "../../constants";

export function useBasicCanvas(canvasRef: CanvasRef) {
	const contextRef = useRef<null | CanvasRenderingContext2D>(null);

	const setCanvasSize = (canvas: HTMLCanvasElement) => {
		const clientWidth = window.innerWidth;
		const clientHeight = window.innerHeight / 1.4;

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

	useEffect(() => {
		const canvas = canvasRef.current;
		const context = canvas?.getContext("2d");

		if (!canvas || !context) return;

		setCanvasSize(canvas);
		setCanvasContext(canvasRef, contextRef, {
			color: tools.initialPencil.color,
			width: tools.initialPencil.width,
		});

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
