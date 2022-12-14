import { BsThreeDotsVertical } from "react-icons/bs";

import { Option, MultiplicationTable, Theory, Tip } from "./components";
import { Dropdown } from "@components/Dropdown";

const tools = [MultiplicationTable, Theory, Tip];

export const HelpTools = () => {
	return (
		<Dropdown<typeof tools[0]>
			ButtonIcon={BsThreeDotsVertical}
			data={tools}
			Item={Option}
			className="w-44 sm:w-52 p-2 rounded flex flex-col gap-1 absolute right-0 top-18 sm:top-[87px] bg-utils-secondary"
		/>
	);
};
