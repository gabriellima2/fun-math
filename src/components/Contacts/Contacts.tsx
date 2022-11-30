import { HTMLAttributes } from "react";
import { BsCode, BsGithub, BsLinkedin } from "react-icons/bs";

import { Contact, ContactProps } from "./components/Contact";

interface ContactsProps extends HTMLAttributes<HTMLUListElement> {}

const contacts: ContactProps[] = [
	{ name: "Linkedin", icon: BsLinkedin, href: "" },
	{ name: "Github", icon: BsGithub, href: "" },
	{ name: "Código Fonte", icon: BsCode, href: "" },
];

export const Contacts = (props: ContactsProps) => (
	<ul {...props}>
		{contacts.map((contact, index) => (
			<Contact {...contact} key={index} />
		))}
	</ul>
);
