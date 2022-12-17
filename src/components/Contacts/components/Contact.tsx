import type { IconType } from "react-icons";
import { Icon } from "@components/Icon";

export interface ContactProps {
	name: string;
	icon: IconType;
	href: string;
}

export const Contact = (props: ContactProps) => (
	<li>
		<a
			href={props.href}
			title={`Ir para ${props.name}`}
			target="_blank"
			rel="noreferrer"
			className="transition hover:text-accents-primary"
		>
			<Icon element={props.icon} className="text-lg md:text-xl" />
		</a>
	</li>
);
