import { HTMLAttributes } from "react";
import { IconType } from "react-icons";
import { BsCode, BsGithub, BsLinkedin } from "react-icons/bs";

import { Icon } from "./Icon";

interface ContactType {
	name: string;
	icon: IconType;
	href: string;
}

interface ContactsProps extends HTMLAttributes<HTMLUListElement> {}

const contacts: ContactType[] = [
	{ name: "Linkedin", icon: BsLinkedin, href: "" },
	{ name: "Github", icon: BsGithub, href: "" },
	{ name: "Código Fonte", icon: BsCode, href: "" },
];

export const Contact = (props: ContactType) => (
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

export const Contacts = (props: ContactsProps) => (
	<ul {...props}>
		{contacts.map((contact, index) => (
			<Contact {...contact} key={index} />
		))}
	</ul>
);
