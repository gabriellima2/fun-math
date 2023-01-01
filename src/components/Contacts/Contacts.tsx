import { HTMLAttributes } from "react";
import { BsCode, BsGithub, BsLinkedin } from "react-icons/bs";

import { Contact, ContactProps } from "./components/Contact";

interface ContactsProps extends HTMLAttributes<HTMLUListElement> {}

const contacts: ContactProps[] = [
	{
		name: "Linkedin",
		icon: BsLinkedin,
		href: "https://www.linkedin.com/in/gabriel-lima-860612236",
	},
	{ name: "Github", icon: BsGithub, href: "https://github.com/gabriellima2" },
	{
		name: "Código Fonte",
		icon: BsCode,
		href: "https://github.com/gabriellima2/fun-math",
	},
];

export const Contacts = (props: ContactsProps) => (
	<ul {...props}>
		{contacts.map((contact, index) => (
			<Contact {...contact} key={index} />
		))}
	</ul>
);
