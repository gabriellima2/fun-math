import { useEffect } from "react";

import { useCanvasContext } from "@contexts/CanvasContext";
import { Tools } from "./components/Tools";

import { createMouseEvent } from "@utils/createMouseEvent";
import { tools } from "@mocks/tools";

const MARGIN_Y = 1.4;

export const Canvas = () => {
	const { canvasRef, draw, startDrawing, stopDrawing, updateCanvasContext2D } =
		useCanvasContext();

	const setCanvasSize = (canvas: HTMLCanvasElement) => {
		const clientWidth = window.innerWidth;
		const clientHeight = window.innerHeight / MARGIN_Y;

		canvas.width = clientWidth;
		canvas.height = clientHeight;

		canvas.style.width = `${clientWidth}px;`;
		canvas.style.height = `${clientHeight}px;`;
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

		updateCanvasContext2D();
	};

	useEffect(() => {
		const canvas = canvasRef.current;
		const context = canvas?.getContext("2d");

		if (!canvas || !context) return;

		setCanvasSize(canvas);
		updateCanvasContext2D({
			color: tools[0].color,
			width: tools[0].width,
		});

		canvas.addEventListener("resize", () => handleResized(canvas, context));

		return () =>
			canvas.removeEventListener("resize", () =>
				handleResized(canvas, context)
			);
	}, []);

	return (
		<>
			<canvas
				id="to-draw"
				ref={canvasRef}
				onMouseDown={startDrawing}
				onTouchStart={({ touches }) =>
					createMouseEvent(touches[0], "mousedown", startDrawing)
				}
				onMouseMove={draw}
				onTouchMove={({ touches }) =>
					createMouseEvent(touches[0], "mousemove", draw)
				}
				onMouseUp={stopDrawing}
				onTouchEnd={stopDrawing}
				onMouseLeave={stopDrawing}
				className="h-full object-contain bg-canvas-area"
			/>
			<Tools />
		</>
	);
};
