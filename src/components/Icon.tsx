import React from "react";

import type { IconDefaultProps } from "@interfaces/IDefaultProps";

interface IconProps extends IconDefaultProps {}

export const Icon = ({ element, ...props }: IconProps) => (
	<i {...props}>{React.createElement(element, null)}</i>
);

const defaultProps: Pick<IconProps, "className"> = {
	className: "text-xl md:text-2xl",
};

Icon.defaultProps = defaultProps;
