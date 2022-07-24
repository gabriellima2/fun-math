import { Disclosure } from "@headlessui/react";
import { BsChevronCompactDown } from "react-icons/bs";

import { Props } from "../../../types";

interface GroupProps extends Props {}
interface ButtonProps extends Props {}
interface PanelProps extends Props {}

const Group = (props: GroupProps) => <Disclosure>{props.children}</Disclosure>;

const Button = (props: ButtonProps) => (
	<Disclosure.Button className={props.className}>
		{props.children}
		<i className="text-xl">
			<BsChevronCompactDown />
		</i>
	</Disclosure.Button>
);

const Panel = (props: PanelProps) => (
	<Disclosure.Panel className={props.className}>
		{props.children}
	</Disclosure.Panel>
);

export const Accordion = { Group, Button, Panel };
