import type { ReactNode, ComponentType } from "react";

export type RefType<T> = null | T;

export type ComponentType<P = object> = React.ComponentType<P>;

export type WithChildren<T = unknown> = {
	children: ReactNode;
} & T;
