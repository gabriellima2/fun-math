import React from "react";
import { Dialog } from "@headlessui/react";
import { BsXLg } from "react-icons/bs";

import { useModalContext } from "@contexts/ModalContext";

export const Modal = () => {
	const { handleClose, isOpen, children } = useModalContext();

	if (!isOpen || !children) return null;

	return (
		<Dialog open={isOpen} onClose={handleClose}>
			<div className="fixed inset-0 bg-black/50 z-45" aria-hidden="true" />

			<div className="absolute right-1/2 top-1/2 translate-x-1/2 -translate-y-1/2 z-50 flex flex-col items-end">
				<Dialog.Panel className="w-[95vw] md:w-fit sm:max-w-[80vw] lg:max-w-[800px] max-h-[50vh] overflow-auto relative p-2 md:p-3 rounded bg-utils-primary">
					<div className="p-4 pt-8">{React.createElement(children, null)}</div>
					<button
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
