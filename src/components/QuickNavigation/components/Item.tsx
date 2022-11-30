import { BaseLink } from "@components/Links/BaseLink";

interface ItemProps {
	name: string;
	href: string;
}

export const Item = (props: ItemProps) => (
	<BaseLink.Text
		href={props.href}
		title={`Ir para ${props.name}`}
		className="no-underline font-normal opacity-70 text-xs md:text-sm capitalize"
	>
		{props.name}
	</BaseLink.Text>
);
