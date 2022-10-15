import { useEffect, useRef } from "react";

import type {
	CanvasRef,
	Context2DRef,
	StylesForCanvasContext,
} from "@hookTypes";

import { tools } from "../../mocks";

const MARGIN_Y = 1.4;

// Adiciona configurações básicas do Canvas.
export function useBasicCanvas(canvasRef: CanvasRef) {
	const context2DRef = useRef<null | CanvasRenderingContext2D>(null);

	const setCanvasSize = (canvas: HTMLCanvasElement) => {
		const clientWidth = window.innerWidth;
		const clientHeight = window.innerHeight / MARGIN_Y;

		canvas.width = clientWidth;
		canvas.height = clientHeight;

		canvas.style.width = `${clientWidth}px;`;
		canvas.style.height = `${clientHeight}px;`;
	};

	// Adiciona novos estilos ao Canvas atualizando o Contexto2D dele.
	const updateCanvasContext2D = (
		canvasRef: CanvasRef,
		context2DRef: Context2DRef,
		styles?: StylesForCanvasContext
	) => {
		const ctx = canvasRef.current?.getContext("2d");

		if (!ctx) return;

		ctx.scale(1, 1);
		ctx.lineCap = "round";
		ctx.strokeStyle = styles?.color || ctx.strokeStyle;
		ctx.lineWidth = styles?.width || ctx.lineWidth;

		context2DRef.current = ctx;
	};

	// Faz "backup" do conteúdo do canvas e redimensiona-o.
	const handleResized = (
		canvas: HTMLCanvasElement,
		context: CanvasRenderingContext2D
	) => {
		const canvasWidth = canvas.width;
		const canvasHeight = canvas.height;

		const canvasBackup = context.getImageData(0, 0, canvasWidth, canvasHeight);

		context.putImageData(canvasBackup, 0, 0);

		updateCanvasContext2D(canvasRef, context2DRef);
	};

	useEffect(() => {
		const canvas = canvasRef.current;
		const context = canvas?.getContext("2d");

		if (!canvas || !context) return;

		setCanvasSize(canvas);
		updateCanvasContext2D(canvasRef, context2DRef, {
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
		context2DRef,
		updateCanvasContext2D,
	};
}
