import Link from "next/link";

import { LinkDefaultProps } from "../../types";

interface TextLinkProps extends LinkDefaultProps {}

export const TextLink = (props: TextLinkProps) => (
	<Link href={props.href}>
		<a className="text-accents-pink-100 font-semibold underline focus:brightness-75 hover:brightness-50 transition-hover">
			{props.children}
		</a>
	</Link>
);
