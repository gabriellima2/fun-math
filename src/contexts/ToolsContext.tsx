import { useContext, useState, createContext } from "react";

import { tools } from "@mocks/tools";
import { ToolNames } from "@constants/index";

import type { WithChildren } from "@globalTypes/TGlobals";
import type { ToolModel } from "@models/tool-model";

interface Tool {
	current: ToolModel;
	prev: ToolModel;
}

interface ToolsContextProperties {
	tool: Tool;
	changeColor: (newColor: string) => void;
	changeWidth: (newWidth: number) => void;
	changeCurrentTool: (toolName: string) => void;
}

export const ToolsContext = createContext({} as ToolsContextProperties);

export const ToolsContextProvider = ({ children }: WithChildren) => {
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

	const changeWidth = (newWidth: number) =>
		setTool((prevState) => ({
			...prevState,
			current: { ...prevState.current, width: newWidth },
		}));

	return (
		<ToolsContext.Provider
			value={{ tool, changeCurrentTool, changeColor, changeWidth }}
		>
			{children}
		</ToolsContext.Provider>
	);
};

export const useToolsContext = () => useContext(ToolsContext);
