import React from "react";
import { Dialog } from "@headlessui/react";
import { BsXLg } from "react-icons/bs";

import type { WithChildren } from "@global-types/TGlobals";

interface ModalProps extends WithChildren {
	handleClose: () => void;
	isOpen: boolean;
	className?: string;
}

export const Modal = ({ handleClose, isOpen, ...props }: ModalProps) => {
	if (!isOpen) return null;

	return (
		<Dialog open={isOpen} onClose={handleClose}>
			<div className="fixed inset-0 bg-black/50 z-45" aria-hidden="true" />

			<div className="absolute right-1/2 top-1/2 translate-x-1/2 -translate-y-1/2 z-50 flex flex-col items-end">
				<Dialog.Panel className={`${props.className} rounded bg-utils-primary`}>
					<div className="p-4 pt-8">{props.children}</div>
					<button
						title="Fechar"
						onClick={handleClose}
						className="text-sm md:text-base fixed top-3 right-5"
					>
						<BsXLg />
					</button>
				</Dialog.Panel>
			</div>
		</Dialog>
	);
};
