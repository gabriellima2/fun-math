import React from "react";

import { Icon } from "../Icon";

import { ButtonDefaultProps } from "../../types";

interface MainButtonProps extends ButtonDefaultProps {
	disabled?: boolean;
}

export const MainButton = (props: MainButtonProps) => (
	<button
		type={props.type}
		disabled={props.disabled}
		className={`${
			props.disabled && "disabled"
		} button--default flex items-center gap-3 p-4 font-semibold`}
	>
		{props.children}
		<Icon {...props.icon} />
	</button>
);
