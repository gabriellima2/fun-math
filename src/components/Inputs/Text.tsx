import type { InputDefaultProps } from "src/@types/IDefaultProps";

interface TextProps extends Omit<InputDefaultProps, "children"> {
	label: string;
}

export const Text = ({ label, ...props }: TextProps) => {
	return (
		<>
			<label
				htmlFor={props.id}
				className="mr-2 text-sm sm:text-base font-medium"
			>
				{label}
			</label>
			<input
				{...props}
				className={`${props.className} border-none outline-none p-2 sm:p-3 text-sm sm:text-base rounded-lg bg-white/5 placeholder:text-white/20`}
			/>
		</>
	);
};
