import React from "react";

import type { ButtonDefaultProps } from "@global-types/IDefaultProps";

interface BaseButtonProps extends ButtonDefaultProps {}

export const BaseButton = ({ className, ...props }: BaseButtonProps) => (
	<button
		{...props}
		className={`w-fit py-2 md:py-3 px-3 md:px-3 xl:px-4 text-sm md:text-base lg:text-lg font-semibold capitalize flex-center--row gap-2 xl:gap-4 rounded-tl-2xl md:rounded-tl-3xl rounded-br-2xl md:rounded-br-3xl bg-accents-primary border-2 border-transparent transition hover:border-accents-primary hover:bg-transparent disabled:pointer-events-lg disabled:opacity-40 disabled:hover:border-transparent disabled:hover:bg-accents-primary ${className}`}
	></button>
);
