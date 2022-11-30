import {
	BsBullseye,
	BsJournalRichtext,
	BsQuestionDiamondFill,
	BsShuffle,
} from "react-icons/bs";

import { Behavior, BehaviorProps } from "./components/Behavior";

const behaviors: BehaviorProps[] = [
	{ text: "foco", icon: BsBullseye },
	{ text: "rascunho", icon: BsJournalRichtext },
	{ text: "cálculos", icon: BsShuffle },
	{ text: "problemas", icon: BsQuestionDiamondFill },
];

export const Behaviors = () => (
	<ul className="grid grid-cols-2 gap-10 sm:gap-12 lg:gap-18">
		{behaviors.map((behavior, index) => (
			<Behavior {...behavior} key={index} />
		))}
	</ul>
);
