import { useEffect, useState, useImperativeHandle, forwardRef } from "react";

import { useBasicCanvas } from "../../hooks/Canvas/";

import { Tools } from "./Tools";

import { CanvasEvent } from "../../types";
import { CanvasRef } from "../../types/hooks";
import { createMouseEvent } from "../../utils/createMouseEvent";

const CLASS_SCROLL_BLOCK = "scroll--block";

interface CanvasProps {
	canvasRef: CanvasRef;
}

export interface CanvasUtilsRef {
	clear: () => void;
}

export const Canvas = forwardRef<CanvasUtilsRef, CanvasProps>((props, ref) => {
	const [isDrawing, setIsDrawing] = useState(false);
	const { contextRef } = useBasicCanvas(props.canvasRef);

	useEffect(() => {
		const html = document.documentElement;

		if (html.classList.contains(CLASS_SCROLL_BLOCK)) {
			return html.classList.remove(CLASS_SCROLL_BLOCK);
		}

		html.classList.add(CLASS_SCROLL_BLOCK);
	}, [isDrawing]);

	const draw = ({ clientX, clientY }: CanvasEvent) => {
		const boundingRect = props.canvasRef.current?.getBoundingClientRect();

		if (!isDrawing || !boundingRect) return;

		contextRef.current?.lineTo(
			clientX - boundingRect.left,
			clientY - boundingRect.top
		);
		contextRef.current?.stroke();
	};

	const startDrawing = ({ clientX, clientY }: CanvasEvent) => {
		const boundingRect = props.canvasRef.current?.getBoundingClientRect();

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

	const clear = () => {
		const canvas = props.canvasRef.current;
		const ctx = canvas?.getContext("2d");

		if (!canvas || !ctx) return;

		ctx.clearRect(0, 0, canvas.width, canvas.height);
	};

	useImperativeHandle(ref, () => {
		return {
			clear,
		};
	});

	return (
		<>
			<canvas
				id="to-draw"
				ref={props.canvasRef}
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
			<Tools
				canvasRef={props.canvasRef}
				contextRef={contextRef}
				clearCanvas={clear}
			/>
		</>
	);
});

Canvas.displayName = "Canvas";
