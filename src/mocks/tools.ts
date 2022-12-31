import { BsFillEraserFill, BsFillPencilFill } from "react-icons/bs";

import { ToolNames } from "@constants";
import type { ITool } from "@global-types/ITool";

export const tools: ITool[] = [
	{
		name: ToolNames.pencil,
		displayText: "Lápis",
		icon: BsFillPencilFill,
		action: "Fazer rabiscos",
		color: "#ffffff",
		width: 5,
	},
	{
		name: ToolNames.eraser,
		displayText: "Borracha",
		icon: BsFillEraserFill,
		action: "Apagar rabiscos",
		color: "#111111",
		width: 5,
	},
];
