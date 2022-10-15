import { useEffect } from "react";

import { useCanvasSuperset } from "../../hooks/Canvas/";

import { ColorPicker } from "../ColorPicker";
import { MainButton } from "../Buttons";
import { Range } from "../Range";
import { Icon } from "../Icon";

import type {
	CanvasRef,
	Context2DRef,
	StylesForCanvasContext,
} from "@hookTypes";
import { CanvasUtils } from "./Canvas";

import { tools } from "../../mocks";

interface Utils extends CanvasUtils {
	updateCanvasContext2D: (
		canvasRef: CanvasRef,
		context2DRef: Context2DRef,
		styles: StylesForCanvasContext
	) => void;
}

interface ToolsProps {
	canvasRef: CanvasRef;
	context2DRef: Context2DRef;
	utils: Utils;
}

interface ToolButtonsProps {
	currentlyActiveTool: string;
	onClick: (tool: string) => void;
}

const ACTIVE_TOOL_STYLE = "bg-main/40 rounded-md text-white/40 transition-all";

const ToolButtons = (props: ToolButtonsProps) => (
	<>
		{tools.list.map((tool) => (
			<button
				type="button"
				title={tool.name}
				data-action={tool.action}
				aria-pressed={tool.id === props.currentlyActiveTool}
				onClick={() => props.onClick(tool.id)}
				key={tool.id}
				className={`${
					tool.id === props.currentlyActiveTool && ACTIVE_TOOL_STYLE
				} p-2`}
			>
				<Icon element={tool.icon} label={`Icone de ${tool.name}`} />
			</button>
		))}
	</>
);

export const Tools = ({ utils, ...props }: ToolsProps) => {
	const { currentTool, changeCurrentTool, changeColor, changeWidth } =
		useCanvasSuperset();

	// Quando mudar algo adiciona os novos estilos ao contexto do canvas.
	useEffect(() => {
		utils.updateCanvasContext2D(props.canvasRef, props.context2DRef, {
			color: currentTool.color,
			width: currentTool.width,
		});
	}, [currentTool]);

	return (
		<section
			aria-controls="to-draw"
			className="w-full flex items-center justify-between p-2 py-3 bg-canvas-tools rounded-br-md rounded-bl-md"
		>
			<div className="flex-center--row flex-wrap gap-3 md:gap-6">
				<ColorPicker color={currentTool.color} changeColor={changeColor} />
				<ToolButtons
					currentlyActiveTool={currentTool.type}
					onClick={changeCurrentTool}
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
			<MainButton
				type="button"
				title="Limpar rabiscos"
				onClick={() => utils.clearCanvas()}
				className="rounded-md p-[10px] md:p-3 text-2xs md:text-xs uppercase tracking-wider"
			>
				Limpar
			</MainButton>
		</section>
	);
};
