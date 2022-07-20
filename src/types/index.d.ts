import React, { InputHTMLAttributes, MouseEvent, ReactNode } from "react";
import { IconType } from "react-icons";

import { cards, links, operators } from "../constants";

export type Cards = typeof cards[0];

export type Links = typeof links[0];

export type Operators = typeof operators[0];

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
	type: "button" | "submit" | "reset" | undefined;
	className?: ClassName;
	title?: Title;
	onClick?: (param: unknown) => void;
}

export interface LinkDefaultProps extends WithChildren {
	href: string;
	icon: IconDefaultProps;
	title?: Title;
}

export interface InputDefaultProps extends WithChildren, InputHTMLAttributes {
	type?: HTMLInputTypeAttribute | undefined;
	id: string;
	name: string;
	value: string;
	placeholder?: string;
	className?: ClassName;
	onChange?: (param: unknown) => unknown;
}

export interface DrawingTool {
	type: string;
	color: string;
	width: number;
}

export interface P extends object {}

export type ComponentType = React.ComponentType<P>;
