import Link from "next/link";
import React from "react";

import type { Links } from "@globalTypes";

interface NavLinkProps extends Links {
	closeSidebar: () => void;
}

interface NavSidebarProps extends Pick<NavLinkProps, "closeSidebar"> {
	links: Links[];
}

export const NavLink = (props: NavLinkProps) => (
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

export const NavSidebar = ({ links, closeSidebar }: NavSidebarProps) => (
	<nav className="w-full p-4">
		<ul>
			{links.map((link) => (
				<NavLink {...link} closeSidebar={closeSidebar} key={link.id} />
			))}
		</ul>
	</nav>
);
