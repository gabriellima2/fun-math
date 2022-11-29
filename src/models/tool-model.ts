import type { IconType } from "react-icons";

export interface ToolModel {
	name: string;
	displayText: string;
	icon: IconType;
	action: string;
	width: number;
	color: string;
}
