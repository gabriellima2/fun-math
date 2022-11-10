import { useState } from "react";
import { Disclosure } from "@headlessui/react";
import { BsChevronCompactUp } from "react-icons/bs";

import type { Props } from "@globalTypes";

interface GroupProps extends Props {}
interface ButtonProps extends Props {}
interface PanelProps extends Props {}

const Group = (props: GroupProps) => <Disclosure>{props.children}</Disclosure>;

const Button = (props: ButtonProps) => {
	const [wasClicked, setWasClicked] = useState(false);

	return (
		<Disclosure.Button
			className={props.className}
			onClick={() => setWasClicked(!wasClicked)}
		>
			{props.children}
			<i className={`${!wasClicked && "rotate-180"} text-lg sm:text-xl`}>
				<BsChevronCompactUp />
			</i>
		</Disclosure.Button>
	);
};

const Panel = (props: PanelProps) => (
	<Disclosure.Panel className={props.className}>
		{props.children}
	</Disclosure.Panel>
);

export const Accordion = { Group, Button, Panel };