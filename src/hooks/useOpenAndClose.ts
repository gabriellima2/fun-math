import { useState } from "react";

interface Return {
	isOpen: boolean;
	handleClose: () => void;
	handleOpen: () => void;
}

export function useOpenAndClose(): Return {
	const [isOpen, setIsOpen] = useState(false);

	return {
		isOpen,
		handleClose: () => setIsOpen(false),
		handleOpen: () => setIsOpen(true),
	};
}
