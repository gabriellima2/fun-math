import { Icon } from "../Icon";

import { ButtonDefaultProps } from "../../types";

interface IconButtonProps extends Omit<ButtonDefaultProps, "children"> {
	onClick?: (e: unknown) => void;
}

export const IconButton = (props: IconButtonProps) => (
	<button
		type={props.type}
		title={props.title}
		onClick={props.onClick}
		className={props.className}
	>
		<Icon
			element={props.icon.element}
			label={props.icon.label}
			className={props.icon.className}
		/>
	</button>
);
