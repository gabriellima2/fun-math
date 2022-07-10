import { useRef, useState } from "react";

import { useCanvas } from "../hooks/useCanvas";

import { CanvasEvent } from "../types";
import { createMouseEvent } from "../utils/createMouseEvent";

export const Canvas = () => {
	const [isDrawing, setIsDrawing] = useState(false);
	const canvasRef = useRef<null | HTMLCanvasElement>(null);
	const { contextRef } = useCanvas(canvasRef);

	const draw = ({ clientX, clientY }: CanvasEvent) => {
		if (!isDrawing) return;

		contextRef.current?.lineTo(clientX, clientY);
		contextRef.current?.stroke();
	};

	const startDrawing = ({ clientX, clientY }: CanvasEvent) => {
		contextRef.current?.beginPath();
		contextRef.current?.moveTo(clientX, clientY);

		setIsDrawing(true);
	};

	const stopDrawing = () => {
		contextRef.current?.closePath();

		setIsDrawing(false);
	};

	return (
		<div>
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
				className="w-full object-contain"
			/>
		</div>
	);
};
