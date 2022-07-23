import { useEffect, useRef, useState } from "react";

import { useBasicCanvas } from "../hooks/Canvas/";

import { Tools } from "./Tools";

import { CanvasEvent } from "../types";
import { createMouseEvent } from "../utils/createMouseEvent";

const CLASS_SCROLL_BLOCK = "scroll--block";

export const Canvas = () => {
	const [isDrawing, setIsDrawing] = useState(false);

	const canvasRef = useRef<null | HTMLCanvasElement>(null);
	const { contextRef } = useBasicCanvas(canvasRef);

	useEffect(() => {
		const html = document.documentElement;

		if (html.classList.contains(CLASS_SCROLL_BLOCK)) {
			return html.classList.remove(CLASS_SCROLL_BLOCK);
		}

		html.classList.add(CLASS_SCROLL_BLOCK);
	}, [isDrawing]);

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
			<Tools canvasRef={canvasRef} contextRef={contextRef} />
		</>
	);
};
