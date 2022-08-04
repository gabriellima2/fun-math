interface ErrorProps {
	message: string;
}

export const Error = (props: ErrorProps) => (
	<p className="text-sm md:text-base">{props.message}</p>
);
