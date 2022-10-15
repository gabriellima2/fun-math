import React from "react";

import { Icon } from "../Icon";

import type { ButtonDefaultProps, IconDefaultProps } from "@globalTypes";

interface MainButtonProps extends ButtonDefaultProps {
	disabled?: boolean;
	icon?: IconDefaultProps;
	variants: "text" | "default";
}

const TextStyle =
	"bg-none capitalize font-semibold hover--default hover:underline";
const DefaultStyle = " button--default flex items-center gap-3 font-semibold";

export const MainButton = ({
	children,
	variants,
	icon,
	...props
}: MainButtonProps) => (
	<button
		{...props}
		className={`${variants === "text" ? TextStyle : DefaultStyle}
			${props.disabled && "disabled"} ${props.className}
		`}
	>
		{children}
		{icon && <Icon {...icon} />}
	</button>
);

const defaultProps: Pick<MainButtonProps, "variants"> = {
	variants: "default",
};

MainButton.defaultProps = defaultProps;
