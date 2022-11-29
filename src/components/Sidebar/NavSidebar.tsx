import Link from "next/link";
import React from "react";
import { useRouter } from "next/router";

import { Icon } from "@components/Icon";
import type { ILink } from "@mocks/links";

interface NavLinkProps extends ILink {
	closeSidebar: () => void;
}

interface NavSidebarProps extends Pick<NavLinkProps, "closeSidebar"> {
	links: ILink[];
}

export const NavLink = (props: NavLinkProps) => {
	const { pathname } = useRouter();

	const isCurrentRoute = pathname === props.href;

	return (
		<li className={`${isCurrentRoute && "pointer-events-none"} w-full`}>
			<Link href={props.href}>
				<a
					onClick={props.closeSidebar}
					aria-disabled={isCurrentRoute}
					tabIndex={isCurrentRoute ? -1 : 0}
					className={`${
						isCurrentRoute &&
						"border-l-2 border-l-accents-primary pointer-events-none"
					} w-full flex items-center gap-4 md:gap-5 text-sm md:text-base capitalize p-4 md:p-5 relative after:bg-gradient-to-r after:from-accents-primary/40 after:to-transparent after:rounded after:w-0 after:h-full after:absolute after:bottom-0 after:left-0 focus:after:w-full hover:after:w-full after:transition-all after:duration-300`}
				>
					<Icon element={props.icon} className="text-lg md:text-xl" />
					{props.name}
				</a>
			</Link>
		</li>
	);
};

export const NavSidebar = ({ links, closeSidebar }: NavSidebarProps) => (
	<nav className="w-full px-2 md:px-4">
		<ul className="flex flex-col gap-2 md:gap-3">
			{links.map((link) => (
				<NavLink {...link} closeSidebar={closeSidebar} key={link.id} />
			))}
		</ul>
	</nav>
);
