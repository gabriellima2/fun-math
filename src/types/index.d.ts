import { MouseEvent, ReactNode } from "react";
import { cards, links } from "../constants";

export type WithChildren<T = unknown> = {
	children: ReactNode;
} & T;

export type Cards = typeof cards[0];

export type Links = typeof links[0];

export interface LinkDefaultProps extends WithChildren {
	href: string;
}

export type ClassName = string;

export type CanvasEvent = MouseEvent | globalThis.MouseEvent;
