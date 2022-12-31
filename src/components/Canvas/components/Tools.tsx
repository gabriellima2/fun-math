import { useEffect } from "react";

import { useCanvasContext } from "@contexts/CanvasContext";
import { useTools } from "../hooks/useTools";

import { Input } from "@components/Inputs/";
import { ClearCanvasButton } from "./ClearCanvasButton";
import { ToolButton } from "./ToolButton";

import { tools } from "@mocks/tools";

export const Tools = () => {
	const { updateCanvasContext2D, clearCanvas } = useCanvasContext();
	const { tool, changeColor, changeWidth, changeCurrentTool } = useTools();

	useEffect(() => {
		updateCanvasContext2D({
			color: tool.current.color,
			width: Number(tool.current.width),
		});
	}, [tool.current]);

	return (
		<section
			aria-controls="to-draw"
			className="w-full flex items-center justify-between p-2 py-3 bg-utils-primary rounded-br-md rounded-bl-md"
		>
			<div className="flex-center--row flex-wrap gap-3 md:gap-6">
				<Input.ColorPicker
					value={tool.current.color}
					onChange={(e) => changeColor(e.target.value)}
				/>

				{tools.map((item) => (
					<ToolButton
						{...item}
						key={item.name}
						tool={tool}
						changeCurrentTool={changeCurrentTool}
					/>
				))}

				<Input.Range
					id="lineWidth"
					name="lineWidth"
					title="Mude a largura dos traços"
					min="1"
					max="30"
					value={tool.current.width.toString()}
					onChange={changeWidth}
				/>
			</div>
			<ClearCanvasButton onClick={clearCanvas} />
		</section>
	);
};
