import {
	useEffect,
	useState,
	useImperativeHandle,
	forwardRef,
	useRef,
} from "react";

import { useBasicCanvas } from "../../hooks/Canvas/";

import { Tools } from "./Tools";

import { CanvasEvent } from "../../types";
import { createMouseEvent } from "../../utils/createMouseEvent";

const CLASS_SCROLL_BLOCK = "scroll--block";

export interface CanvasUtils {
	clearCanvas: () => void;
}

export const Canvas = forwardRef<CanvasUtils, {}>((props, ref) => {
	const [isDrawing, setIsDrawing] = useState(false);
	const canvasRef = useRef<null | HTMLCanvasElement>(null);
	const { context2DRef, updateCanvasContext2D } = useBasicCanvas(canvasRef);

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

		context2DRef.current?.lineTo(
			clientX - boundingRect.left,
			clientY - boundingRect.top
		);
		context2DRef.current?.stroke();
	};

	const startDrawing = ({ clientX, clientY }: CanvasEvent) => {
		const boundingRect = canvasRef.current?.getBoundingClientRect();

		if (!boundingRect) return;

		context2DRef.current?.beginPath();
		context2DRef.current?.moveTo(
			clientX - boundingRect.left,
			clientY - boundingRect.top
		);

		setIsDrawing(true);
	};

	const stopDrawing = () => {
		context2DRef.current?.closePath();

		setIsDrawing(false);
	};

	const clearCanvas = () => {
		const canvas = canvasRef.current;
		const ctx = canvas?.getContext("2d");

		if (!canvas || !ctx) return;

		ctx.clearRect(0, 0, canvas.width, canvas.height);
	};

	useImperativeHandle(ref, () => {
		return {
			clearCanvas,
		};
	});

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
			<Tools
				canvasRef={canvasRef}
				context2DRef={context2DRef}
				utils={{ clearCanvas, updateCanvasContext2D }}
			/>
		</>
	);
});
