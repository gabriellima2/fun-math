import React, { useState } from "react";
import { Dialog } from "@headlessui/react";

import { CloseSidebarButton, OpenSidebarButton } from "./SidebarButton";
import { Copyright } from "../Copyright";
import { NavSidebar } from "./NavSidebar";

import { links } from "../../mocks";

export const Sidebar = () => {
	const [isOpen, setIsOpen] = useState(false);

	if (!isOpen) {
		return <OpenSidebarButton onClick={() => setIsOpen(true)} />;
	}

	return (
		<Dialog open={isOpen} onClose={() => setIsOpen(false)} className="z-50">
			<div className="fixed inset-0 bg-black/60" aria-hidden="true" />

			<div className="inset-0 absolute right-0 top-0 z-45 flex flex-col items-end">
				<Dialog.Panel className="w-full md:max-w-md h-fit flex-center--col relative py-17 md:py-20 bg-utils-primary rounded-xl">
					<Dialog.Title className="hidden">Menu de navegação</Dialog.Title>

					<CloseSidebarButton onClick={() => setIsOpen(false)} />

					<NavSidebar links={links} closeSidebar={() => setIsOpen(false)} />

					<span className="absolute bottom-5 md:bottom-7">
						<Copyright />
					</span>
				</Dialog.Panel>
			</div>
		</Dialog>
	);
};
