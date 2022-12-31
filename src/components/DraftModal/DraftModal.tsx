import { useState } from "react";

import { CanvasContextProvider } from "@contexts/CanvasContext";

import { HideButton, OpenButton } from "./components";
import { Canvas } from "@components/Canvas";
import { Modal } from "@components/Modal";

export const DraftModal = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [isHide, setIsHide] = useState(false);

	const handleHide = () => setIsHide(true);

	const handleShow = () => setIsHide(false);

	if (!isOpen) return <OpenButton handleClick={() => setIsOpen(true)} />;

	return (
		<Modal
			handleClose={() => setIsOpen(false)}
			isOpen={isOpen}
			className={`${isHide ? "opacity-0" : "opacity-100"} pt-2 md:pt-4`}
		>
			<header>
				<HideButton handleHide={handleHide} handleShow={handleShow} />
			</header>
			<div className="w-[86vw] xl:w-[80vw] max-w-fit xl:max-w-[1600px] md:max-h-[1/2] overflow-x-hidden">
				<CanvasContextProvider>
					<Canvas />
				</CanvasContextProvider>
			</div>
		</Modal>
	);
};
