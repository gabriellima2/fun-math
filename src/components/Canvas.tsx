import { useRef, useState } from "react";

import { useBasicCanvas, useCanvasSuperset } from "../hooks/Canvas/";

import { Range } from "./Range";
import { ColorPicker } from "./ColorPicker";
import { IconButton } from "./Buttons/IconButton";

import { CanvasEvent } from "../types";
import { CanvasRef, ContextRef } from "../types/hooks";

import { createMouseEvent } from "../utils/createMouseEvent";
import { tools } from "../constants";

interface ToolsProps {
	canvasRef: CanvasRef;
	contextRef: ContextRef;
}

const Tools = (props: ToolsProps) => {
	const { currentTool, changeCurrentTool, changeColor, changeWidth, clear } =
		useCanvasSuperset(props.canvasRef, props.contextRef);

	return (
		<section className="flex items-center justify-between p-2 bg-black-400/70">
			<div className="flex-center--row gap-4 md:gap-6">
				<ColorPicker color={currentTool.color} changeColor={changeColor} />
				{tools.list.map((tool) => (
					<IconButton
						type="button"
						title={tool.name}
						onClick={() => changeCurrentTool(tool.id)}
						icon={{
							element: tool.icon,
							label: `Icone de ${tool.name}`,
							className: `${
								tool.id === currentTool.type && "text-white/40 transition-all"
							} text-xl`,
						}}
					/>
				))}

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
				className="button--default p-2 px-3 md:px-4 rounded-md font-accent text-sm md:text-base tracking-wider"
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
			<Tools canvasRef={canvasRef} contextRef={contextRef} />
		</>
	);
};
