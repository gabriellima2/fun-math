import type { IconType } from "react-icons/lib";

export interface IExercise {
	id: string;
	displayText: string;
	icon: IconType;
	needOperator: boolean;
}
