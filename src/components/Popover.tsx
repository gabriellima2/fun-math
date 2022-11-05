import { Popover as HeadlessPopover } from "@headlessui/react";

import type { Props, Title } from "@globalTypes";

interface GroupProps extends Props {}
interface ButtonProps extends Props {
	title?: Title;
}
interface PanelProps extends Props {}

const Group = (props: GroupProps) => (
	<HeadlessPopover className={props.className}>
		{props.children}
	</HeadlessPopover>
);

const Button = (props: ButtonProps) => (
	<HeadlessPopover.Button title={props.title} className={props.className}>
		{props.children}
	</HeadlessPopover.Button>
);

const Panel = (props: PanelProps) => (
	<HeadlessPopover.Panel className={props.className}>
		{props.children}
	</HeadlessPopover.Panel>
);

export const Popover = { Group, Button, Panel };
