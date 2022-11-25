import { BsFillQuestionCircleFill } from "react-icons/bs";

import { MultiplicationTableHelper } from "./MultiplicationTableHelpTool";
import { TheoryHelpTool } from "./TheoryHelpTool";
import { TipHelpTool } from "./TipHelpTool";
import { Accordion } from "../Accordion";
import { Popover } from "../Popover";

type OptionProps = typeof helpToolsAvailable[0];

const helpToolsAvailable = [
	MultiplicationTableHelper,
	TheoryHelpTool,
	TipHelpTool,
];

const Option = ({ buttonText, Content }: OptionProps) => (
	<Accordion.Group>
		<Accordion.Button className="p-2 md:p-3 text-sm md:text-base">
			{buttonText}
		</Accordion.Button>
		<Accordion.Panel className="p-3 md:p-4 text-sm md:text-base">
			<Content />
		</Accordion.Panel>
	</Accordion.Group>
);

const Options = () => (
	<ul className="w-full flex flex-col gap-2">
		{helpToolsAvailable.map((helpTool, index) => (
			<Option {...helpTool} key={index} />
		))}
	</ul>
);

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
					<Options />
				</section>
			</Popover.Panel>
		</Popover.Group>
	);
};
