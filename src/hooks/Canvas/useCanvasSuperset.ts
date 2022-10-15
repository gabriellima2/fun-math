import { useState } from "react";

import type { DrawingTool } from "@globalTypes";

import { tools } from "../../mocks";

interface CanvasSuperset {
	currentTool: DrawingTool;
	changeColor: (color: string) => void;
	changeWidth: (width: number) => void;
	changeCurrentTool: (tool: string) => void;
}

// Superset, funções, para deixar o Canvas mais completo.
export function useCanvasSuperset(): CanvasSuperset {
	// Salvar a ferramenta atual e anterior com suas propriedades correspondentes.
	const [prevTool, setPrevTool] = useState(tools.initialEraser as DrawingTool);
	const [currentTool, setCurrentTool] = useState(
		tools.initialPencil as DrawingTool
	);

	// Muda a ferramenta, mas "salvando" as propriedades dela.
	const changeCurrentTool = (tool: string) => {
		if (tool === currentTool.type) return;

		setCurrentTool(prevTool);
		setPrevTool(currentTool);
	};

	const changeColor = (newColor: string) => {
		if (currentTool.type === tools.typeOfTools.eraser) return;

		setCurrentTool((prevState) => ({ ...prevState, color: newColor }));
	};

	const changeWidth = (newWidth: number) =>
		setCurrentTool((prevState) => ({ ...prevState, width: newWidth }));

	return {
		currentTool,
		changeColor,
		changeWidth,
		changeCurrentTool,
	};
}
