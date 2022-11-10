import { HTMLAttributes } from "react";

import { BaseLink } from "./Links/BaseLink";
import { links } from "src/mocks";

interface INavigation {
	name: string;
	href: string;
}

interface QuickNavigationProps extends HTMLAttributes<HTMLUListElement> {}

export const Item = (props: INavigation) => (
	<BaseLink.Text
		href={props.href}
		title={`Ir para ${props.name}`}
		className="no-underline font-normal opacity-70 text-xs md:text-sm capitalize"
	>
		{props.name}
	</BaseLink.Text>
);

export const QuickNavigation = (props: QuickNavigationProps) => (
	<nav>
		<ul {...props}>
			{links.map((item, index) => (
				<Item {...item} key={index} />
			))}
		</ul>
	</nav>
);