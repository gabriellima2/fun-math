import type {
	InputHTMLAttributes,
	ChangeEvent,
	AnchorHTMLAttributes,
	HTMLAttributes,
} from "react";
import type { IconType } from "react-icons";
import type { LinkProps } from "next/link";
import type { WithChildren } from "@globalTypes/TGlobals";

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
