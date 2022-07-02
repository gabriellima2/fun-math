import React, { useState } from "react";
import Link from "next/link";
import { Dialog } from "@headlessui/react";

import { links } from "../contents/links";

type NavLinkProps = typeof links[0];

const NavLink = (props: NavLinkProps) => (
	<li>
		<Link href={props.href}>
			<>
				<i>{React.createElement(props.icon, null)}</i>
				<a>{props.name}</a>
			</>
		</Link>
	</li>
);

export const Sidebar = () => {
	const [isOpen, setIsOpen] = useState(false);

	if (!isOpen) {
		return <button onClick={() => setIsOpen(true)}>Abrir Sidebar</button>;
	}

	return (
		<Dialog open={isOpen} onClose={() => setIsOpen(false)}>
			<Dialog.Panel>
				<Dialog.Title className="hidden">Navigation sidebar</Dialog.Title>
				<nav>
					<ul>
						{links.map((link) => (
							<NavLink {...link} key={link.id} />
						))}
					</ul>
				</nav>
				<button onClick={() => setIsOpen(false)}>Fechar Sidebar</button>
			</Dialog.Panel>
		</Dialog>
	);
};
