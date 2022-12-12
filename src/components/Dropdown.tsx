import React from "react";
import { Popover } from "@headlessui/react";
import type { IconType } from "react-icons";

interface DropdownProps<TData>
	extends Omit<React.HTMLAttributes<HTMLDivElement>, "children"> {
	ButtonIcon: IconType;
	Item: (props: TData) => JSX.Element;
	data: TData[];
}

export const Dropdown = <TData extends {}>({
	ButtonIcon,
	Item,
	data,
	...props
}: DropdownProps<TData>) => {
	return (
		<Popover>
			<Popover.Button className="rounded-full p-3 hover:bg-white/5">
				{React.createElement(ButtonIcon, null)}
			</Popover.Button>
			<Popover.Panel {...props}>
				{data.map((tool, index) => (
					<Item {...tool} key={index} />
				))}
			</Popover.Panel>
		</Popover>
	);
};
