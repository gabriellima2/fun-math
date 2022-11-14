import { NextPage } from "next";
import type { ReactNode, ComponentType } from "react";

export type RefType<T> = null | T;

export type ReactComponent<Props = object> = ComponentType<Props>;

export type Page<Props = object> = NextPage<Props>;

export type Component<Props> = ReactComponent<Props> | Page<Props>;

export type WithChildren<T = unknown> = {
	children: ReactNode;
} & T;
