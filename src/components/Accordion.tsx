import React, { ButtonHTMLAttributes } from "react";
import { BsChevronCompactUp } from "react-icons/bs";
import { Disclosure } from "@headlessui/react";

import { useToggle } from "@hooks/useToggle";

import { Icon } from "./Icon";

import type { ButtonDefaultProps } from "src/@types/IDefaultProps";

interface GroupProps extends ButtonHTMLAttributes<HTMLDivElement> {}
interface PanelProps extends ButtonHTMLAttributes<HTMLDivElement> {}
interface ButtonProps extends ButtonDefaultProps {}

const Button = (props: ButtonProps) => {
	const { isActive, toggle } = useToggle();

	return (
		<Disclosure.Button
			{...props}
			className={`${props.className} ${
				isActive ? "border-l-accents-primary" : "border-transparent"
			} flex items-center justify-between gap-12 border-l-2 relative after:bg-gradient-to-r after:from-accents-primary/40 after:to-transparent after:rounded after:w-0 after:h-full after:absolute after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300`}
			onClick={toggle}
		>
			{props.children}
			<Icon
				element={BsChevronCompactUp}
				className={`${!isActive && "rotate-180"} text-lg sm:text-xl`}
			/>
		</Disclosure.Button>
	);
};

const Panel = (props: PanelProps) => <Disclosure.Panel {...props} />;

const Group = (props: GroupProps) => <Disclosure {...props} />;

export const Accordion = { Group, Panel, Button };
