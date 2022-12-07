import React from "react";
import { Menu } from "@headlessui/react";
import type { IconType } from "react-icons";

interface DropdownProps<TData> {
	ButtonIcon: IconType;
	Item: (props: TData) => JSX.Element;
	data: TData[];
}

export const Dropdown = <TData extends {}>(props: DropdownProps<TData>) => (
	<Menu>
		<Menu.Button>{React.createElement(props.ButtonIcon, null)}</Menu.Button>
		<Menu.Items>
			{props.data.map((tool, index) => (
				<Menu.Item key={index}>
					{React.createElement(props.Item, { ...tool })}
				</Menu.Item>
			))}
		</Menu.Items>
	</Menu>
);
