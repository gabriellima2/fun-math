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

export const tools = {
	typeOfTools,
	initialEraser,
	initialPencil,
};
