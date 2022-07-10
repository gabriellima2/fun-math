import { RadioGroup } from "@headlessui/react";

import { ClassName, WithChildren } from "../types";

interface GroupProps extends WithChildren {
	label: string;
	currentActiveOption: string | null;
	handleChange: (param: string) => void;
	className?: ClassName;
}

interface OptionProps extends WithChildren {
	value: string;
	className?: ClassName;
}

const Group = (props: GroupProps) => (
	<RadioGroup
		value={props.currentActiveOption}
		onChange={props.handleChange}
		className={props.className}
	>
		<RadioGroup.Label className="hidden">{props.label}</RadioGroup.Label>
		{props.children}
	</RadioGroup>
);

const Option = (props: OptionProps) => (
	<RadioGroup.Option value={props.value} className={props.className}>
		{({ checked }) => (
			<div
				className={`${checked && "options--selected"}
				options cursor-pointer w-full justify-center sm:justify-start`}
			>
				{props.children}
			</div>
		)}
	</RadioGroup.Option>
);

export const Radio = { Group, Option };
