import React, { ReactNode, useState } from "react";
import { Dialog } from "@headlessui/react";

interface ModalProps {
	triggerChildren: ReactNode;
	children: ReactNode;
}

export const Modal = ({ triggerChildren, ...props }: ModalProps) => {
	const [isOpen, setIsOpen] = useState(false);

	if (!isOpen)
		return <button onClick={() => setIsOpen(true)}>{triggerChildren}</button>;

	return (
		<Dialog open={isOpen} onClose={() => setIsOpen(false)}>
			<Dialog.Panel>
				<div>{props.children}</div>

				<button>X</button>
			</Dialog.Panel>
		</Dialog>
	);
};
