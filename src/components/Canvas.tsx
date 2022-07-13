import { useRef, useState } from "react";

import { useCanvas } from "../hooks/useCanvas";

import { ColorPicker } from "./ColorPicker";
import { Range } from "./Range";

import { CanvasEvent } from "../types";
import { createMouseEvent } from "../utils/createMouseEvent";

const CANVAS_BACKGROUND_COLOR = "#262626";

export const Canvas = () => {
	const [isDrawing, setIsDrawing] = useState(false);

	const canvasRef = useRef<null | HTMLCanvasElement>(null);
	const { contextRef, styles, activateEraser } = useCanvas(
		canvasRef,
		CANVAS_BACKGROUND_COLOR
	);

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
		<div>
			<section>
				<ColorPicker
					color={styles.currentColor}
					changeColor={styles.changeCurrentColor}
				/>

				<Range
					id="lineWidth"
					name="lineWidth"
					label="Mude a largura dos traços"
					min="1"
					max="30"
					value={styles.strokeWidth}
					changeValue={styles.changeStrokeWidth}
				/>
				<button onClick={activateEraser}>Borracha</button>
			</section>
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
		</div>
	);
};
