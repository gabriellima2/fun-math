import { BsFillQuestionCircleFill } from "react-icons/bs";

import { Popover } from "../Infra/Accessibility/Popover";
import { Accordion } from "../Infra/Accessibility/Accordion";
import { MultiplicationTableHelper } from "./MultiplicationTableHelper";
import { TheoryHelper } from "./TheoryHelper";
import { TipHelper } from "./TipHelper";

const HelperComponents = [MultiplicationTableHelper, TheoryHelper, TipHelper];

type HelperType = typeof HelperComponents[0];

interface OptionsProps {
	Helper: HelperType;
}

const Options = ({ Helper }: OptionsProps) => (
	<Accordion.Group>
		<Accordion.Button className="w-full flex justify-between items-center p-3 my-2 rounded-md bg-accents-pink-100/20 text-accents-pink-100 font-semibold">
			<Helper.Button />
		</Accordion.Button>
		<Accordion.Panel>
			<Helper.Content />
		</Accordion.Panel>
	</Accordion.Group>
);

export const Helpers = () => {
	return (
		<Popover.Group>
			<Popover.Button className="text-3xl">
				<BsFillQuestionCircleFill />
			</Popover.Button>
			<Popover.Panel className="absolute z-50">
				<div className="w-96 flex-center--col max-w-md rounded-xl px-3 py-4 bg-black-400 z-50">
					{HelperComponents.map((Helper, index) => (
						<Options Helper={Helper} key={index} />
					))}
				</div>
			</Popover.Panel>
		</Popover.Group>
	);
};
