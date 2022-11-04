import React, { useState } from "react";
import Link from "next/link";
import { Dialog } from "@headlessui/react";
import { BsFillGridFill, BsXLg } from "react-icons/bs";

import { Copyright } from ".";

import type { Links } from "@globalTypes";
import { links } from "../../mocks";

type NavLinkProps = Links & {
	closeSidebar: () => void;
};

interface ButtonProps {
	handleClick: () => void;
}

const NavLink = (props: NavLinkProps) => (
	<li onClick={props.closeSidebar} className="w-full">
		<Link href={props.href}>
			<a className="w-full bg-gradient-to-r from-accents-purple flex items-center gap-2 text-lg capitalize p-4 my-2 rounded-md transition-hover hover:brightness-75 focus:brightness-75">
				<i className="text-2xl self-start">
					{React.createElement(props.icon, null)}
				</i>
				{props.name}
			</a>
		</Link>
	</li>
);

const OpenSidebarButton = ({ handleClick }: ButtonProps) => (
	<button
		title="Abrir Menu de Navegação"
		onClick={handleClick}
		className="justify-self-end text-xl text-pink-50"
	>
		<BsFillGridFill />
	</button>
);

const CloseSidebarButton = ({ handleClick }: ButtonProps) => (
	<button
		title="Fechar Menu de Navegação"
		onClick={handleClick}
		className="absolute top-6 md:top-9 right-6 md:right-9 text-xl text-pink-50"
	>
		<BsXLg />
	</button>
);

export const Sidebar = () => {
	const [isOpen, setIsOpen] = useState(false);

	if (!isOpen) {
		return <OpenSidebarButton handleClick={() => setIsOpen(true)} />;
	}

	return (
		<Dialog open={isOpen} onClose={() => setIsOpen(false)} className="z-50">
			<div className="fixed inset-0 bg-black-800/60" aria-hidden="true" />

			<div className="inset-0 absolute right-0 top-0 z-45 flex flex-col items-end">
				<Dialog.Panel className="w-full md:max-w-md h-fit flex-center--col bg-black-700 relative py-20">
					<Dialog.Title className="hidden">Barra de navegação</Dialog.Title>

					<CloseSidebarButton handleClick={() => setIsOpen(false)} />

					<nav className="w-full p-4">
						<ul>
							{links.map((link) => (
								<NavLink
									{...link}
									closeSidebar={() => setIsOpen(false)}
									key={link.id}
								/>
							))}
						</ul>
					</nav>

					<span className="absolute bottom-9 ">
						<Copyright />
					</span>
				</Dialog.Panel>
			</div>
		</Dialog>
	);
};
