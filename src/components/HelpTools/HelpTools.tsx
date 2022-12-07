import { BsThreeDotsVertical } from "react-icons/bs";

import {
	Option,
	MultiplicationTableHelpTool,
	TheoryHelpTool,
	TipHelpTool,
} from "./components";
import { Dropdown } from "@components/Dropdown";

const tools = [MultiplicationTableHelpTool, TheoryHelpTool, TipHelpTool];

export const HelpTools = () => {
	return (
		<Dropdown<typeof tools[0]>
			ButtonIcon={BsThreeDotsVertical}
			data={tools}
			Item={Option}
		/>
	);
};
