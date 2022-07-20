import { ButtonDefaultProps } from "../../types";

interface TextButtonProps extends ButtonDefaultProps {}

export const TextButton = (props: TextButtonProps) => (
	<button
		{...props}
		className={`${props.className} bg-none capitalize font-semibold hover--default`}
	>
		{props.children}
	</button>
);
