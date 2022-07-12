import { useRef, useState } from "react";

import { useCanvas } from "../hooks/useCanvas";

import { CanvasEvent } from "../types";
import { createMouseEvent } from "../utils/createMouseEvent";

export const Canvas = () => {
	const [isDrawing, setIsDrawing] = useState(false);
	const canvasRef = useRef<null | HTMLCanvasElement>(null);
	const { contextRef } = useCanvas(canvasRef, { color: "white", width: 5 });

	const draw = ({ clientX, clientY }: CanvasEvent) => {
		const boundingRect = canvasRef.current?.getBoundingClientRect();

		if (!isDrawing || !boundingRect) return;

		contextRef.current?.lineTo(
			clientX - boundingRect.left,
			clientY - boundingRect.top
		);
		contextRef.current?.stroke();
	};

	const startDrawing = ({ clientX, clientY }: CanvasEvent) => {
		const boundingRect = canvasRef.current?.getBoundingClientRect();

		if (!boundingRect) return;

		contextRef.current?.beginPath();
		contextRef.current?.moveTo(
			clientX - boundingRect.left,
			clientY - boundingRect.top
		);

		setIsDrawing(true);
	};

	const stopDrawing = () => {
		contextRef.current?.closePath();

		setIsDrawing(false);
	};

	return (
		<canvas
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
			className="object-contain bg-black-200"
		/>
	);
};
