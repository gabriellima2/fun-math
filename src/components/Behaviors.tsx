import type { IconType } from "react-icons";
import {
	BsBullseye,
	BsJournalRichtext,
	BsQuestionDiamondFill,
	BsShuffle,
} from "react-icons/bs";

import { Icon } from "./Icon";

interface BehaviorProperties {
	text: string;
	icon: IconType;
}

const behaviors: BehaviorProperties[] = [
	{ text: "foco", icon: BsBullseye },
	{ text: "rascunho", icon: BsJournalRichtext },
	{ text: "cálculos", icon: BsShuffle },
	{ text: "problemas", icon: BsQuestionDiamondFill },
];

const Behavior = (props: BehaviorProperties) => (
	<li className="capitalize flex-center--col gap-2 sm:gap-3 text-font/70 text-sm md:text-base">
		<Icon
			element={props.icon}
			className="text-5xl md:text-6xl lg:text-7xl text-accents-secondary"
		/>
		{props.text}
	</li>
);

export const Behaviors = () => (
	<ul className="grid grid-cols-2 gap-10 sm:gap-12 lg:gap-18">
		{behaviors.map((behavior, index) => (
			<Behavior {...behavior} key={index} />
		))}
	</ul>
);
