import { ReactNode } from "react";
import { cards, links } from "../constants";

export type WithChildren<T = unknown> = {
	children: ReactNode;
} & T;

export type Cards = typeof cards[0];

export type Links = typeof links[0];
