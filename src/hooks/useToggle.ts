import { useState } from "react";

export function useToggle() {
	const [isOpen, setIsOpen] = useState(false);

	const handleOpen = () => setIsOpen(true);

	const handleClose = () => setIsOpen(false);

	const handleToggle = () => setIsOpen((prevState) => !prevState);

	return {
		isOpen,
		handleToggle,
		handleClose,
		handleOpen,
	};
}
