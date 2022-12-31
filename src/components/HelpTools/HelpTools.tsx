import React, { useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";

import { MultiplicationTable, Theory, Tip } from "./components";
import { Dropdown } from "@components/Dropdown";
import { Modal } from "@components/Modal";
import { useOpenAndClose } from "@hooks/useOpenAndClose";

type IndexSelectedTool = number | null;

const tools = [MultiplicationTable, Theory, Tip];

export const HelpTools = () => {
	const { isOpen, handleClose, handleOpen } = useOpenAndClose();
	const [indexSelectedTool, setIndexSelectedTool] =
		useState<IndexSelectedTool>(null);

	const handleClick = (indexTool: number) => {
		setIndexSelectedTool(indexTool);
		handleOpen();
	};

	return (
		<>
			<Dropdown<typeof tools[0]>
				data={tools}
				ButtonIcon={BsThreeDotsVertical}
				Item={({ ButtonContent, clickedIndex }) => (
					<button
						className="flex items-center gap-2 md:gap-4 p-2 text-sm md:text-base"
						onClick={() => handleClick(clickedIndex)}
					>
						<ButtonContent />
					</button>
				)}
				className="w-44 sm:w-52 p-2 rounded flex flex-col gap-1 absolute right-0 top-18 sm:top-[87px] bg-utils-secondary"
			/>

			{indexSelectedTool !== null && (
				<Modal
					handleClose={handleClose}
					isOpen={isOpen}
					className="w-[95vw] md:w-fit sm:max-w-[80vw] lg:max-w-[800px] max-h-[50vh] overflow-auto relative p-2 md:p-3"
				>
					{React.createElement(tools[indexSelectedTool].Content, null)}
				</Modal>
			)}
		</>
	);
};
