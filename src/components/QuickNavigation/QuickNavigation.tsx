import { HTMLAttributes } from "react";

import { Item } from "./components/Item";
import { links } from "@mocks/links";

interface QuickNavigationProps extends HTMLAttributes<HTMLUListElement> {}

export const QuickNavigation = (props: QuickNavigationProps) => (
	<nav>
		<ul {...props}>
			{links.map((item, index) => (
				<Item {...item} key={index} />
			))}
		</ul>
	</nav>
);
