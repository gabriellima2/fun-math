import Link from "next/link";
import React from "react";

import { Icon } from "../Icon";

import { LinkDefaultProps } from "../../types";

interface MainLinkProps extends LinkDefaultProps {}

export const MainLink = (props: MainLinkProps) => (
	<Link href={props.href}>
		<a
			className={`${props.className} w-fit button--default flex items-center gap-3 text-sm sm:text-base md:text-lg capitalize font-semibold p-4 md:px-6`}
		>
			{props.children} <Icon {...props.icon} />
		</a>
	</Link>
);
