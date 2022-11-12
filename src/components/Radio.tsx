import { HTMLAttributes } from "react";
import { RadioGroup } from "@headlessui/react";

interface GroupProps extends Omit<HTMLAttributes<HTMLDivElement>, "onChange"> {
	label: string;
	value: string | null | undefined;
	onChange: (target: string) => void;
}

export interface OptionProps extends HTMLAttributes<HTMLDivElement> {
	value: string;
}

const Option = (props: OptionProps) => (
	<RadioGroup.Option {...props}>
		{({ checked }) => (
			<div
				className={`${props.className} ${
					checked &&
					"after:border-solid after:border-2 after:border-accents-secondary after:animate-pulse brightness-50 pointer-events-none"
				}
				w-full bg-main flex items-center justify-start gap-5 sm:gap-6 p-7 sm:p-8 rounded-2xl text-sm sm:text-base capitalize overflow-hidden cursor-pointer relative after:absolute after:top-0 after:left-0 after:w-full after:h-full after:rounded-2xl`}
			>
				{props.children}
			</div>
		)}
	</RadioGroup.Option>
);

const Group = ({ label, ...props }: GroupProps) => (
	<RadioGroup
		{...props}
		className={`${props.className} flex flex-col gap-4 sm:gap-6`}
	>
		<RadioGroup.Label className="text-sm sm:text-base font-accent font-semibold">
			{label}
		</RadioGroup.Label>
		{props.children}
	</RadioGroup>
);

export const Radio = { Group, Option };
