import React from "react";

import { IconDefaultProps } from "../types";

interface IconProps extends IconDefaultProps {}

export const Icon = (props: IconProps) => (
	<i aria-label={props.label} className={props.className}>
		{React.createElement(props.element, null)}
	</i>
);

const defaultProps: Pick<IconProps, "className"> = {
	className: "text-xl md:text-2xl",
};

Icon.defaultProps = defaultProps;
