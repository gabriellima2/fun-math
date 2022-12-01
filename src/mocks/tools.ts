import { BsFillEraserFill, BsFillPencilFill } from "react-icons/bs";

import { ToolNames } from "@constants/index";
import type { ToolModel } from "@models/tool-model";

export const tools: ToolModel[] = [
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
