import { BsFillEraserFill, BsFillPencilFill } from "react-icons/bs";
import { IDrawingTool } from "@interfaces/IDrawingTool";

enum typeOfTools {
	eraser = "eraser",
	pencil = "pencil",
}

const initialEraser: IDrawingTool = {
	type: typeOfTools.eraser,
	color: "#141414",
	width: 15,
};

const initialPencil: IDrawingTool = {
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
