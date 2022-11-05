import { LinkProps } from "next/link";
import React, {
	InputHTMLAttributes,
	MouseEvent,
	ReactNode,
	ChangeEvent,
	AnchorHTMLAttributes,
	HTMLAttributes,
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

export interface IconDefaultProps extends HTMLAttributes<HTMLElement> {
	element: IconType;
}

export interface ButtonDefaultProps extends HTMLAttributes<HTMLButtonElement> {}

export interface LinkDefaultProps
	extends LinkProps,
		AnchorHTMLAttributes<HTMLAnchorElement> {}

export interface InputDefaultProps
	extends WithChildren,
		InputHTMLAttributes<HTMLInputElement> {
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

export interface StepData {
	title: string;
	description: string;
	icon: {
		url: string;
	};
}
