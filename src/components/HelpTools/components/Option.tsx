import { MultiplicationTableHelpTool } from "./MultiplicationTableHelpTool";
import { Accordion } from "@components/Accordion";

type OptionProps = typeof MultiplicationTableHelpTool;

export const Option = ({ buttonText, Content }: OptionProps) => (
	<Accordion.Group>
		<Accordion.Button className="p-2 md:p-3 text-sm md:text-base">
			{buttonText}
		</Accordion.Button>
		<Accordion.Panel className="p-3 md:p-4 text-sm md:text-base">
			<Content />
		</Accordion.Panel>
	</Accordion.Group>
);
