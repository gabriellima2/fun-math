import { BsFillEraserFill, BsFillPencilFill } from "react-icons/bs";

import { ToolNames } from "@constants/index";
import type { ITool } from "@interfaces/ITools";

export const tools: ITool[] = [
	{
		name: ToolNames.pencil,
		displayText: "Lápis",
		icon: BsFillPencilFill,
		action: "Fazer rabiscos",
		color: "#fff",
		width: 5,
	},
	{
		name: ToolNames.eraser,
		displayText: "Borracha",
		icon: BsFillEraserFill,
		action: "Apagar rabiscos",
		color: "#111",
		width: 5,
	},
];
