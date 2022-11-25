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
		<Accordion.Button className="p-3 md:p-4 text-sm md:text-base">
			{buttonText}
		</Accordion.Button>
		<Accordion.Panel className="p-2 text-sm md:text-base">
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
				className="flex-center--row text-2xl"
			>
				<BsFillQuestionCircleFill />
			</Popover.Button>

			<Popover.Panel className="absolute -right-[5px] top-[85px] z-50">
				<section className="w-96 flex-center--col gap-3 md:gap-4 bg-utils-secondary p-3 md:p-4 rounded-md">
					<h1 className="font-bold text-lg md:text-xl">Menu de Ajuda</h1>
					<Options />
				</section>
			</Popover.Panel>
		</Popover.Group>
	);
};
