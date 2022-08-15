import { TextLink } from "../Links";

import { Logo } from "./Logo";

import { ClassName } from "../../types";

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
	<div className="gradient-background gap-4 px-4">
		{withLogo && <Logo />}
		<Text {...props} />
		<TextLink href="/">Voltar para o início</TextLink>
	</div>
);

const defaultProps: Pick<ErrorProps, "className"> = {
	className: "text-sm md:text-base",
};

Text.defaultProps = defaultProps;

export const Error = { Text, FullScreen };
