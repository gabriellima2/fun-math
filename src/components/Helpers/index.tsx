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
		<Accordion.Button className="w-full flex justify-between items-center gap-4 p-3 my-2 text-sm sm:text-base rounded-md bg-accents-pink-100/20 text-accents-pink-100 font-semibold transition-hover hover:bg-accents-pink-100/30">
			<Helper.ButtonText />
		</Accordion.Button>
		<Accordion.Panel className="w-full max-h-[200px] md:max-h-[280px] overflow-y-auto font-util p-3 rounded-md bg-black-500/50">
			<Helper.Content />
		</Accordion.Panel>
	</Accordion.Group>
);

export const Helpers = () => {
	return (
		<Popover.Group>
			<Popover.Button title="Menu de Ajuda" className="text-2xl md:text-3xl">
				<BsFillQuestionCircleFill />
			</Popover.Button>
			<Popover.Panel className="absolute right-0 z-50 h-[50vh] overflow-y-auto overflow-x-hidden">
				<div className="w-min-auto w-64 md:w-96 sm:w-80 flex-center--col max-w-md rounded-xl px-3 py-4 bg-black-400 z-50 border-2 border-black-100">
					<h1 className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold mb-2">
						Ajuda
					</h1>

					{HelperComponents.map((Helper, index) => (
						<Options Helper={Helper} key={index} />
					))}
				</div>
			</Popover.Panel>
		</Popover.Group>
	);
};
