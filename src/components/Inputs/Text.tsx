import { InputDefaultProps } from "../../types";

interface TextProps extends InputDefaultProps {
	customizedAttributes?: {
		isInvalid?: boolean | undefined;
	};
}

export const Text = ({
	children,
	customizedAttributes,
	...props
}: TextProps) => {
	return (
		<>
			<label
				htmlFor={props.id}
				className="mr-1 font-accent text-base md:text-lg"
			>
				{children}
			</label>
			<input
				{...props}
				aria-invalid={customizedAttributes?.isInvalid || undefined}
				className={`${props.className} p-1 px-2 font-accent text-sm md:text-base font-medium tracking-wide rounded-lg bg-transparent border-2 border-white/30 transition-all outline-custom--focus focus:border-transparent`}
			/>
		</>
	);
};

const defaultProps: Pick<TextProps, "placeholder"> = {
	placeholder: "Digite aqui...",
};

Text.defaultProps = defaultProps;
