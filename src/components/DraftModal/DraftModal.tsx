import { useState } from "react";

import { CanvasContextProvider } from "@contexts/CanvasContext";

import { ExpandedButton, OpenButton } from "./components";
import { Canvas } from "@components/Canvas";
import { Modal } from "@components/Modal";

export const DraftModal = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [isVisible, setIsVisible] = useState(false);

	const handleShow = () => setIsVisible(true);

	const handleHide = () => setIsVisible(false);

	if (!isOpen) return <OpenButton handleClick={() => setIsOpen(true)} />;

	return (
		<>
			<Modal
				handleClose={() => setIsOpen(false)}
				isOpen={isOpen}
				className={`${isVisible && "bg-transparent"} transition pt-2 md:pt-4`}
			>
				<ExpandedButton
					isVisible={isVisible}
					handleHide={handleHide}
					handleShow={handleShow}
				/>
				<div
					className={`${
						isVisible ? "opacity-0" : "opacity-100"
					} transition w-[86vw] xl:w-[80vw] max-w-fit xl:max-w-[1600px] md:max-h-[1/2] overflow-x-hidden`}
				>
					<CanvasContextProvider>
						<Canvas />
					</CanvasContextProvider>
				</div>
			</Modal>
		</>
	);
};
