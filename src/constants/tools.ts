import { BsFillEraserFill, BsFillPencilFill } from "react-icons/bs";
import { DrawingTool } from "../types";

enum typeOfTools {
	eraser = "eraser",
	pencil = "pencil",
}

const initialEraser: DrawingTool = {
	type: typeOfTools.eraser,
	color: "#262626",
	width: 5,
};

const initialPencil: DrawingTool = {
	type: typeOfTools.pencil,
	color: "#ffffff",
	width: 5,
};

const list = [
	{
		id: typeOfTools.pencil,
		name: "Lápis",
		icon: BsFillPencilFill,
		action: "Fazer rabiscos",
	},
	{
		id: typeOfTools.eraser,
		name: "Borracha",
		icon: BsFillEraserFill,
		action: "Apagar rabiscos",
	},
];

export const tools = {
	typeOfTools,
	initialEraser,
	initialPencil,
	list,
};
