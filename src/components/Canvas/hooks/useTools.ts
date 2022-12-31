import { useState } from "react";

import { tools } from "@mocks/tools";
import { ToolNames } from "@constants";

import type { ITool } from "@interfaces/itool";

interface Tool {
	current: ITool;
	prev: ITool;
}

export interface IUseTools {
	tool: Tool;
	changeColor: (newColor: string) => void;
	changeWidth: (newWidth: number) => void;
	changeCurrentTool: (toolName: string) => void;
}

export function useTools(): IUseTools {
	const [tool, setTool] = useState<Tool>({
		current: tools[0],
		prev: tools[1],
	});

	const changeCurrentTool = (toolName: string) => {
		if (toolName === tool.current.name) return;

		setTool((prevState) => ({
			current: prevState.prev,
			prev: prevState.current,
		}));
	};

	const changeColor = (newColor: string) => {
		if (tool.current.name === ToolNames.eraser) return;

		setTool((prevState) => ({
			...prevState,
			current: { ...prevState.current, color: newColor },
		}));
	};

	const changeWidth = (newWidth: number) => {
		setTool((prevState) => ({
			...prevState,
			current: { ...prevState.current, width: newWidth },
		}));
	};

	return {
		tool,
		changeCurrentTool,
		changeColor,
		changeWidth,
	};
}
