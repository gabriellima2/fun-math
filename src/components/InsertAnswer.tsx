import { Input } from "./Inputs";

interface InsertAnswerProps {
	value: string;
	onChange: (e: string) => void;
	isInvalid: boolean;
}

export const InsertAnswer = (props: InsertAnswerProps) => (
	<div className="flex-center--col gap-3 sm:flex-row">
		<Input.Text
			type="text"
			id="insert-answer"
			name="answer"
			value={props.value}
			onChange={(e) => props.onChange(e.target.value)}
			isInvalid={props.isInvalid}
			className="w-32 md:w-auto h-10"
		>
			<span>R:</span>O resultado é{" "}
		</Input.Text>
	</div>
);
