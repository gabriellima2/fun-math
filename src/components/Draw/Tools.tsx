import { useCanvasSuperset } from "../../hooks/Canvas/";

import { ColorPicker } from "../ColorPicker";
import { MainButton } from "../Buttons";
import { Range } from "../Range";
import { Icon } from "../Icon";

import { CanvasUtils } from "./Canvas";
import { CanvasRef, ContextRef } from "../../types/hooks";

import { tools } from "../../constants";

interface ToolsProps {
	canvasRef: CanvasRef;
	contextRef: ContextRef;
	canvasUtils: CanvasUtils;
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

export const Tools = (props: ToolsProps) => {
	const { currentTool, changeCurrentTool, changeColor, changeWidth, clear } =
		useCanvasSuperset(props.canvasRef, props.contextRef);

	console.log(props);

	return (
		<section
			aria-controls="to-draw"
			className="flex items-center justify-between p-2 bg-canvas-tools rounded-br-md rounded-bl-md"
		>
			<div className="flex-center--row gap-3 md:gap-6">
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
				onClick={() => props.canvasUtils.clearCanvas()}
				className="rounded-md p-[10px] md:p-3 text-2xs md:text-xs uppercase tracking-wider"
			>
				Limpar
			</MainButton>
		</section>
	);
};
