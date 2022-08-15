import React, {
	InputHTMLAttributes,
	MouseEvent,
	ReactNode,
	ChangeEvent,
} from "react";
import { IconType } from "react-icons";

import { CanvasUtils } from "../components/Draw/Canvas";
import { links, operators, exercises } from "../mocks";

export type Links = typeof links[0];

export type OperatorType = typeof operators.data[0];

export type ExerciseType = typeof exercises.data[0];

export type ClassName = string;

export type Title = string;

export type DefaultRefType<T> = null | T;

export type CanvasEvent = MouseEvent | globalThis.MouseEvent;

export type CanvasElement = DefaultRefType<HTMLCanvasElement>;

export type CanvasUtilsRef = DefaultRefType<CanvasUtils>;

export type ComponentType<P = object> = React.ComponentType<P>;

export type Children = ReactNode;

export type WithChildren<T = unknown> = {
	children: Children;
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
	disabled?: boolean;
	onClick?: (param?: MouseEvent<HTMLButtonElement>) => void;
}

export interface LinkDefaultProps extends WithChildren {
	href: string;
	icon: IconDefaultProps;
	title?: Title;
	className?: ClassName;
}

export interface InputDefaultProps extends WithChildren, InputHTMLAttributes {
	type?: HTMLInputTypeAttribute | undefined;
	id: string;
	name: string;
	value: string;
	placeholder?: string;
	className?: ClassName;
	onChange: (param: ChangeEvent<HTMLInputElement>) => unknown;
}

export interface DrawingTool {
	type: string;
	color: string;
	width: number;
}

export interface Props extends WithChildren {
	className?: ClassName;
}
