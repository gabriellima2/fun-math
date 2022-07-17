import React from "react";

import { Icon } from "../Icon";

import { ButtonDefaultProps, IconDefaultProps } from "../../types";

interface MainButtonProps extends ButtonDefaultProps {
	disabled?: boolean;
	icon?: IconDefaultProps;
}

export const MainButton = (props: MainButtonProps) => (
	<button
		type={props.type}
		onClick={props.onClick}
		disabled={props.disabled}
		className={`${props.disabled && "disabled"} ${
			props.className
		} button--default flex items-center gap-3 font-semibold`}
	>
		{props.children}
		{props.icon && <Icon {...props.icon} />}
	</button>
);
