import React from "react";

import type { ButtonDefaultProps } from "@interfaces/IDefaultProps";

interface BaseButtonProps extends ButtonDefaultProps {
	disabled?: boolean;
}

export const BaseButton = ({ className, ...props }: BaseButtonProps) => (
	<button
		{...props}
		className={`${className} w-fit py-2 md:py-3 px-3 md:px-3 xl:px-4 text-sm md:text-base lg:text-lg font-semibold capitalize flex-center--row gap-2 xl:gap-4 rounded-tl-2xl md:rounded-tl-3xl rounded-br-2xl md:rounded-br-3xl bg-accents-primary border-2 border-transparent transition hover:border-accents-primary hover:bg-transparent`}
	></button>
);
