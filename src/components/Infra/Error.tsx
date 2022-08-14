interface ErrorProps {
	message: string;
}

const Text = (props: ErrorProps) => (
	<p className="text-sm md:text-base">{props.message}</p>
);

const FullScreen = (props: ErrorProps) => (
	<div className="gradient-container">
		<Text message={props.message} />
	</div>
);

export const Error = { Text, FullScreen };
