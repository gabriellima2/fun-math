import Link from "next/link";
import React from "react";

import { Icon } from "./Icon";

import type { LinkDefaultProps } from "@globalTypes";

interface MainLinkProps extends LinkDefaultProps {
	variants: "text" | "default";
}

const TextStyle =
	"text-accents-pink-100 font-semibold underline focus:brightness-75 hover:brightness-50 transition-hover";

const DefaultStyle =
	"w-fit button--default flex items-center gap-3 text-sm sm:text-base md:text-lg capitalize font-semibold p-4 md:px-6";

export const MainLink = (props: MainLinkProps) => (
	<Link title={props.title} href={props.href}>
		<a
			className={`${props.variants === "text" ? TextStyle : DefaultStyle} ${
				props.className
			}`}
		>
			{props.children}
			{props.icon && <Icon {...props.icon} />}
		</a>
	</Link>
);

const defaultProps: Pick<MainLinkProps, "variants"> = {
	variants: "default",
};

MainLink.defaultProps = defaultProps;
