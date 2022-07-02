import React, { useState } from "react";
import Link from "next/link";
import { Dialog } from "@headlessui/react";
import { BsFillGrid3X3GapFill, BsXLg } from "react-icons/bs";

import { links } from "../contents/links";

type NavLinkProps = typeof links[0];

const NavLink = (props: NavLinkProps) => (
	<li className="w-full">
		<Link href={props.href}>
			<a className="w-full bg-gradient-to-r from-accents-purple ... flex items-center gap-2 text-lg capitalize p-4 my-2 rounded-md transition-hover hover:brightness-75 focus:brightness-75">
				<i className="text-2xl self-start">
					{React.createElement(props.icon, null)}
				</i>
				{props.name}
			</a>
		</Link>
	</li>
);

export const Sidebar = () => {
	const [isOpen, setIsOpen] = useState(false);

	if (!isOpen) {
		return (
			<button
				onClick={() => setIsOpen(true)}
				className="justify-self-end text-2xl text-pink-50"
			>
				<BsFillGrid3X3GapFill />
			</button>
		);
	}

	return (
		<Dialog open={isOpen} onClose={() => setIsOpen(false)} className="z-50">
			<div className="fixed inset-0 bg-black-800/60" aria-hidden="true" />

			<div className="inset-0 absolute right-0 top-0 z-45 flex flex-col items-end">
				<Dialog.Panel className="w-full md:max-w-md h-1/2 flex-center--col bg-black-700 relative">
					<Dialog.Title className="hidden">Barra de navegação</Dialog.Title>
					<button
						onClick={() => setIsOpen(false)}
						className="absolute top-8 right-8 text-2xl text-pink-50"
					>
						<BsXLg />
					</button>
					<nav className="w-full p-4">
						<ul>
							{links.map((link) => (
								<NavLink {...link} key={link.id} />
							))}
						</ul>
					</nav>
					<small className="absolute bottom-9 font-medium">
						&copy; FunMath! - {new Date().getFullYear()}
					</small>
				</Dialog.Panel>
			</div>
		</Dialog>
	);
};
