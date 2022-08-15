import { ChangeEvent } from "react";
import { keys } from "../constants/keys";
import { Input } from "./Inputs";

interface InsertAnswerProps {
	value: string;
	isInvalid: boolean;
	onChange: (e: string) => void;
}

export const InsertAnswer = (props: InsertAnswerProps) => {
	const handleChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
		if (target.value.length > 0) {
			const lastValue: string = target.value[target.value.length - 1];

			if (lastValue !== "0" && !Object.hasOwn(keys, lastValue)) return;
		}

		props.onChange(target.value);
	};

	return (
		<div className="flex-center--col gap-3 sm:flex-row">
			<Input.Text
				type="text"
				id="insert-answer"
				name="answer"
				value={props.value}
				onChange={handleChange}
				customizedAttributes={{
					isInvalid: props.isInvalid,
				}}
				className="w-32 md:w-auto h-10"
			>
				<span>R:</span>O resultado é{" "}
			</Input.Text>
		</div>
	);
};
