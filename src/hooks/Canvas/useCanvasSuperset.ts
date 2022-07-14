import { useEffect, useState } from "react";

import { DrawingTool } from "../../types";
import { CanvasRef, ContextRef } from "../../types/hooks";
import { setCanvasContext } from "../../utils/setCanvasContext";

import { tools } from "../../constants";

interface CanvasSuperset {
	currentTool: DrawingTool;
	changeColor: (color: string) => void;
	changeWidth: (width: number) => void;
	changeCurrentTool: (tool: string) => void;
	clear: () => void;
}

export function useCanvasSuperset(
	canvasRef: CanvasRef,
	contextRef: ContextRef
): CanvasSuperset {
	const [prevTool, setPrevTool] = useState(tools.initialEraser as DrawingTool);
	const [currentTool, setCurrentTool] = useState(
		tools.initialPencil as DrawingTool
	);

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

	// Quando mudar algo adiciona os novos estilos ao contexto do canvas.
	useEffect(() => {
		setCanvasContext(canvasRef, contextRef, {
			color: currentTool.color,
			width: currentTool.width,
		});
	}, [currentTool]);

	const clear = () => {
		const canvas = canvasRef.current;
		const ctx = canvas?.getContext("2d");

		if (!canvas || !ctx) return;

		ctx.clearRect(0, 0, canvas.width, canvas.height);
	};

	return {
		currentTool,
		changeColor,
		changeWidth,
		changeCurrentTool,
		clear,
	};
}
