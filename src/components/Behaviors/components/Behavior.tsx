import type { IconType } from "react-icons";
import { Icon } from "@components/Icon";

export interface BehaviorProps {
	text: string;
	icon: IconType;
}

export const Behavior = (props: BehaviorProps) => (
	<li className="capitalize flex-center--col gap-2 sm:gap-3 text-font/70 text-sm md:text-base">
		<Icon
			element={props.icon}
			className="text-4xl md:text-6xl lg:text-7xl text-accents-secondary"
		/>
		{props.text}
	</li>
);
