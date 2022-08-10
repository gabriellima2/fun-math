import { InputDefaultProps } from "../../types";

interface TextProps extends InputDefaultProps {
	isInvalid?: boolean | undefined;
}

export const Text = (props: TextProps) => {
	return (
		<>
			<label
				htmlFor={props.id}
				className="mr-1 font-accent text-base md:text-lg"
			>
				{props.children}
			</label>
			<input
				type={props.type}
				name={props.name}
				id={props.id}
				value={props.value}
				aria-invalid={props.isInvalid}
				onChange={(e) => props.onChange(e)}
				placeholder={props.placeholder}
				className={`${props.className} p-1 px-2 font-accent text-sm md:text-base font-medium tracking-wide rounded-lg bg-transparent border-2 border-white/30 transition-all outline-custom--focus focus:border-transparent`}
			/>
		</>
	);
};

const defaultProps: Pick<TextProps, "placeholder"> = {
	placeholder: "Digite aqui...",
};

Text.defaultProps = defaultProps;
