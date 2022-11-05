import { BaseLink } from "./Links/BaseLink";

import { Logo } from "./Logo";

import type { ClassName } from "@globalTypes";

interface ErrorProps {
	message: string;
	className?: ClassName;
}

interface FullScreenProps extends ErrorProps {
	withLogo?: boolean;
}

const Text = (props: ErrorProps) => (
	<p className={`${props.className} `}>{props.message}</p>
);

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
