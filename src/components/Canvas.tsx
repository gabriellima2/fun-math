import { useRef, useState } from "react";
import { BsFillEraserFill, BsFillPencilFill } from "react-icons/bs";

import { ITools, useCanvas } from "../hooks/useCanvas";

import { Range } from "./Range";
import { ColorPicker } from "./ColorPicker";
import { IconButton } from "./Buttons/IconButton";

import { CanvasEvent } from "../types";
import { createMouseEvent } from "../utils/createMouseEvent";

const CANVAS_BACKGROUND_COLOR = "#262626";

interface ToolsProps extends ITools {}

const Tools = (props: ToolsProps) => (
	<section className="flex items-center justify-between p-2 bg-black-400/70">
		<div className="flex-center--row gap-2">
			<ColorPicker
				color={props.currentColor}
				changeColor={props.changeCurrentColor}
			/>
			<IconButton
				onClick={() => props.changeCurrentObject("pencil")}
				type="button"
				title="Lápis"
				icon={{ element: BsFillPencilFill, label: "Icone de Lápis" }}
			/>
			<IconButton
				onClick={() => props.changeCurrentObject("eraser")}
				type="button"
				title="Borracha"
				icon={{ element: BsFillEraserFill, label: "Icone de Borracha" }}
			/>

			<Range
				id="lineWidth"
				name="lineWidth"
				label="Mude a largura dos traços"
				min="1"
				max="30"
				value={props.strokeWidth.toString()}
				changeValue={props.changeStrokeWidth}
			/>
		</div>
		<button
			type="button"
			className="button--default p-2 px-4 rounded-md font-accent tracking-wider"
		>
			Limpar
		</button>
	</section>
);

export const Canvas = () => {
	const [isDrawing, setIsDrawing] = useState(false);

	const canvasRef = useRef<null | HTMLCanvasElement>(null);
	const { contextRef, tools } = useCanvas(canvasRef, CANVAS_BACKGROUND_COLOR);

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
			<Tools {...tools} />
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
				className="object-contain bg-black-200 rounded-md h-full"
			/>
		</>
	);
};
