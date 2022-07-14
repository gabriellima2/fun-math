import { MouseEvent, ReactNode } from "react";
import { IconType } from "react-icons";

import { cards, links } from "../constants";

export type Cards = typeof cards[0];

export type Links = typeof links[0];

export type ClassName = string;

export type Title = string;

export type CanvasEvent = MouseEvent | globalThis.MouseEvent;

export type WithChildren<T = unknown> = {
	children: ReactNode;
} & T;

export interface IconDefaultProps {
	element: IconType;
	label: string;
	className?: ClassName;
}

export interface ButtonDefaultProps extends WithChildren {
	icon: IconDefaultProps;
	type: "button" | "submit" | "reset" | undefined;
	className?: ClassName;
	title?: Title;
}

export interface LinkDefaultProps extends WithChildren {
	href: string;
	icon: IconDefaultProps;
	title?: Title;
}
