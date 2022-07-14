import Link from "next/link";
import React from "react";

import { Icon } from "../Icon";

import { LinkDefaultProps } from "../../types";

interface MainLinkProps extends LinkDefaultProps {}

export const MainLink = (props: MainLinkProps) => (
	<Link href={props.href}>
		<a className="w-fit button--default flex items-center gap-3 text-base font-semibold md:text-lg p-4 md:px-6 mb-36 lg:mb-36">
			{props.children} <Icon {...props.icon} className="ml-2" />
		</a>
	</Link>
);
