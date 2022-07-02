import { ReactNode } from "react";

export type WithChildren<T = unknown> = {
	children: ReactNode;
} & T;
