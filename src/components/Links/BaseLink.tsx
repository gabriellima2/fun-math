import React from "react";
import Link from "next/link";

import type { LinkDefaultProps } from "@globalTypes";

export interface BaseLinkProps extends LinkDefaultProps {}

const Text = ({ className, children, ...props }: BaseLinkProps) => (
	<Link {...props}>
		<a
			className={`${className} text-accents-pink-100 font-semibold underline focus:brightness-75 hover:brightness-50 transition-hover`}
		>
			{children}
		</a>
	</Link>
);

const Background = ({ className, children, ...props }: BaseLinkProps) => (
	<Link {...props}>
		<a
			className={`${className} w-fit py-2 md:py-3 px-3 md:px-3 xl:px-4 text-sm md:text-base lg:text-lg font-semibold capitalize flex-center--row gap-2 xl:gap-4 rounded-tl-2xl md:rounded-tl-3xl rounded-br-2xl md:rounded-br-3xl bg-accents-primary border-2 border-transparent transition hover:border-accents-primary hover:bg-transparent`}
		>
			{children}
		</a>
	</Link>
);

export const BaseLink = { Text, Background };
