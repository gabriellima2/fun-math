import { useEffect } from "react";

import { useDraftContext } from "@contexts/DraftContext";
import { useToolsContext } from "@contexts/ToolsContext";

import { ClearCanvasButton } from "@components/Buttons/ClearCanvasButton";
import { ToolButton } from "@components/Buttons/ToolButton";
import { ColorPicker } from "@components/ColorPicker";
import { Range } from "@components/Range";

import { tools } from "@mocks/tools";

export const Tools = () => {
	const { updateCanvasContext2D, clearCanvas } = useDraftContext();
	const { tool, changeColor, changeWidth } = useToolsContext();

	useEffect(() => {
		updateCanvasContext2D({
			color: tool.current.color,
			width: Number(tool.current.width),
		});
	}, [tool.current]);

	return (
		<section
			aria-controls="to-draw"
			className="w-full flex items-center justify-between p-2 py-3 bg-canvas-tools rounded-br-md rounded-bl-md"
		>
			<div className="flex-center--row flex-wrap gap-3 md:gap-6">
				<ColorPicker color={tool.current.color} changeColor={changeColor} />

				{tools.map((tool) => (
					<ToolButton {...tool} key={tool.name} />
				))}

				<Range
					id="lineWidth"
					name="lineWidth"
					label="Mude a largura dos traços"
					min="1"
					max="30"
					value={tool.current.width.toString()}
					changeValue={changeWidth}
				/>
			</div>
			<ClearCanvasButton onClick={clearCanvas} />
		</section>
	);
};
