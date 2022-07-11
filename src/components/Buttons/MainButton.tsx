import React from "react";

import { Icon } from "../Icon";

import { ButtonDefaultProps } from "../../types";

interface MainButtonProps extends ButtonDefaultProps {
	type: "button" | "submit" | "reset" | undefined;
	disabled?: boolean;
}

export const MainButton = (props: MainButtonProps) => (
	<button
		type={props.type}
		disabled={props.disabled}
		className={`${props.disabled && "disabled"} main-button`}
	>
		{props.children}
		<Icon {...props.icon} />
	</button>
);
