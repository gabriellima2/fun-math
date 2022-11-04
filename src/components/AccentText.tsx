import { HTMLAttributes } from "react";

interface AccentParagraphProps extends HTMLAttributes<HTMLParagraphElement> {}

export const AccentParagraph = ({
	className,
	...props
}: AccentParagraphProps) => (
	<p
		{...props}
		className={`${className} relative pl-2 md:pl-3 border-l-2 md:border-l-4 text-sm md:text-base border-l-accents-primary`}
	/>
);
