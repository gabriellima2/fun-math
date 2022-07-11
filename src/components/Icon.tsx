import React from "react";

import { ClassName, IconDefaultProps } from "../types";

interface IconProps extends IconDefaultProps {
	className?: ClassName;
}

export const Icon = (props: IconProps) => (
	<i aria-label={props.label} className={props.className}>
		{React.createElement(props.element, null)}
	</i>
);

const defaultProps: Pick<IconProps, "className"> = {
	className: "text-xl md:text-2xl",
};

Icon.defaultProps = defaultProps;
