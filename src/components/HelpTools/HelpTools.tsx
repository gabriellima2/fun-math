import { BsFillQuestionCircleFill } from "react-icons/bs";

import { Option } from "./components/Option";
import { Popover } from "../Popover";
import {
	MultiplicationTableHelpTool,
	TheoryHelpTool,
	TipHelpTool,
} from "./components/";

const helpToolsAvailable = [
	MultiplicationTableHelpTool,
	TheoryHelpTool,
	TipHelpTool,
];

export const HelpTools = () => {
	return (
		<Popover.Group>
			<Popover.Button
				title="Abrir menu de ajuda"
				className="flex-center--row text-xl sm:text-2xl"
			>
				<BsFillQuestionCircleFill />
			</Popover.Button>

			<Popover.Panel className="absolute right-0 sm:-right-[5px] top-[60px] sm:top-[85px] z-50">
				<section className="w-[90vw] sm:w-72 md:w-80 flex-center--col gap-2 sm:gap-3 bg-utils-secondary p-3 sm:p-2 md:p-3 rounded-md">
					<h1 className="font-bold text-base sm:text-lg">Menu de Ajuda</h1>

					<ul className="w-full flex flex-col gap-2">
						{helpToolsAvailable.map((helpTool, index) => (
							<Option {...helpTool} key={index} />
						))}
					</ul>
				</section>
			</Popover.Panel>
		</Popover.Group>
	);
};
