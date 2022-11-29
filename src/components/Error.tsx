import type { IError } from "@interfaces/IError";
import type { HTMLAttributes } from "react";

import { BaseLink } from "./Links/BaseLink";
import { Logo } from "./Logo";

interface ErrorProps
	extends Omit<HTMLAttributes<HTMLParagraphElement>, "children">,
		IError {}

interface FullScreenProps extends ErrorProps {
	withLogo?: boolean;
}

const Text = ({ message, ...props }: ErrorProps) => <p {...props}>{message}</p>;

const FullScreen = ({ withLogo, ...props }: FullScreenProps) => (
	<div className="gradient-background h-screen gap-4 px-4">
		{withLogo && <Logo />}
		<Text {...props} />
		<BaseLink.Text href="/">Voltar para o início</BaseLink.Text>
	</div>
);

const defaultProps: Pick<ErrorProps, "className"> = {
	className: "text-sm md:text-base",
};

Text.defaultProps = defaultProps;

export const Error = { Text, FullScreen };
