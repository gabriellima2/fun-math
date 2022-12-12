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
				<Dialog.Panel className="sm:w-fit w-[95vw] sm:max-w-[80vw] lg:max-w-[800px] relative p-2 md:p-3 rounded bg-utils-primary">
					<div className="p-2">{React.createElement(children, null)}</div>
					<button
						onClick={handleClose}
						className="text-sm md:text-base absolute top-2 right-2"
					>
						<BsXLg />
					</button>
				</Dialog.Panel>
			</div>
		</Dialog>
	);
};
