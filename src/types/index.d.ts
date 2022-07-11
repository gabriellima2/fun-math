import { MouseEvent, ReactNode } from "react";
import { IconType } from "react-icons";

import { cards, links } from "../constants";

export type Cards = typeof cards[0];

export type Links = typeof links[0];

export type ClassName = string;

export type CanvasEvent = MouseEvent | globalThis.MouseEvent;

export type WithChildren<T = unknown> = {
	children: ReactNode;
} & T;

export interface IconDefaultProps {
	element: IconType;
	label: string;
}

export interface ButtonDefaultProps extends WithChildren {
	icon: IconDefaultProps;
}

export interface LinkDefaultProps extends WithChildren {
	href: string;
	icon: IconDefaultProps;
}
