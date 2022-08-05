import { Popover as HeadlessPopover } from "@headlessui/react";

import { Props } from "../../../types";

interface GroupProps extends Props {}
interface ButtonProps extends Props {}
interface PanelProps extends Props {}

const Group = (props: GroupProps) => (
	<HeadlessPopover className={props.className}>
		{props.children}
	</HeadlessPopover>
);

const Button = (props: ButtonProps) => (
	<HeadlessPopover.Button className={props.className}>
		{props.children}
	</HeadlessPopover.Button>
);

const Panel = (props: PanelProps) => (
	<HeadlessPopover.Panel className={props.className}>
		{props.children}
	</HeadlessPopover.Panel>
);

export const Popover = { Group, Button, Panel };
