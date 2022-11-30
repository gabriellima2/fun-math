import type {
	InputHTMLAttributes,
	AnchorHTMLAttributes,
	HTMLAttributes,
	ButtonHTMLAttributes,
} from "react";
import type { IconType } from "react-icons";
import type { LinkProps } from "next/link";

export interface IconDefaultProps extends HTMLAttributes<HTMLElement> {
	element: IconType;
}

export interface ButtonDefaultProps
	extends ButtonHTMLAttributes<HTMLButtonElement> {}

export interface LinkDefaultProps
	extends LinkProps,
		AnchorHTMLAttributes<HTMLAnchorElement> {}

export interface InputDefaultProps
	extends InputHTMLAttributes<HTMLInputElement> {}
