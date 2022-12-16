import type { IconType } from "react-icons";

export interface ITool {
	name: string;
	displayText: string;
	icon: IconType;
	action: string;
	width: number;
	color: string;
}
