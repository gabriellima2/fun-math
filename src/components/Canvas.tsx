import { useRef, useState } from "react";
import { BsFillEraserFill, BsFillPencilFill } from "react-icons/bs";

import { useBasicCanvas, useCanvasSuperset } from "../hooks/Canvas/";

import { Range } from "./Range";
import { ColorPicker } from "./ColorPicker";
import { IconButton } from "./Buttons/IconButton";

import { CanvasEvent } from "../types";
import { CanvasRef, ContextRef } from "../types/hooks";
import { createMouseEvent } from "../utils/createMouseEvent";

interface ToolsProps {
	canvasRef: CanvasRef;
	contextRef: ContextRef;
}

const Tools = (props: ToolsProps) => {
	const { currentTool, changeCurrentTool, changeColor, changeWidth, clear } =
		useCanvasSuperset(props.canvasRef, props.contextRef);

	return (
		<section className="flex items-center justify-between p-2 bg-black-400/70">
			<div className="flex-center--row gap-2">
				<ColorPicker color={currentTool.color} changeColor={changeColor} />
				<IconButton
					onClick={() => changeCurrentTool("pencil")}
					type="button"
					title="Lápis"
					icon={{ element: BsFillPencilFill, label: "Icone de Lápis" }}
				/>
				<IconButton
					onClick={() => changeCurrentTool("eraser")}
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
					value={currentTool.width.toString()}
					changeValue={changeWidth}
				/>
			</div>
			<button
				type="button"
				onClick={clear}
				className="button--default p-2 px-4 rounded-md font-accent tracking-wider"
			>
				Limpar
			</button>
		</section>
	);
};

export const Canvas = () => {
	const [isDrawing, setIsDrawing] = useState(false);

	const canvasRef = useRef<null | HTMLCanvasElement>(null);
	const { contextRef } = useBasicCanvas(canvasRef);

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
			<Tools canvasRef={canvasRef} contextRef={contextRef} />
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
