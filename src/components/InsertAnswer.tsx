import {
	ChangeEvent,
	forwardRef,
	useContext,
	useEffect,
	useImperativeHandle,
	useState,
} from "react";

import { Input } from "./Inputs";

import { CurrentExerciseContext } from "@contexts/CurrentExerciseContext";
import { debounce } from "../utils/debounce";
import { keys } from "../constants/keys";

export interface InsertAnswerRef {
	insertAnswerValue: string;
	clearInsertAnswerValue: () => void;
}

export const InsertAnswer = forwardRef<InsertAnswerRef, {}>((props, ref) => {
	const [typedAnswer, setTypedAnswer] = useState("");

	const {
		currentExercise: { type },
		userAnswerIsCorrect,
		clearCorrection,
		correctExercise,
	} = useContext(CurrentExerciseContext);

	const handleChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
		if (type === "currency" && target.value.length > 0) {
			const lastValue: string = target.value[target.value.length - 1];

			if (lastValue !== "0" && !Object.hasOwn(keys, lastValue)) return;
		}

		setTypedAnswer(target.value);
	};

	const clearTypedAnswer = () => setTypedAnswer("");

	useImperativeHandle(ref, () => ({
		insertAnswerValue: typedAnswer,
		clearInsertAnswerValue: clearTypedAnswer,
	}));

	useEffect(() => {
		if (userAnswerIsCorrect !== null) {
			clearCorrection();
		}

		debounce(() => correctExercise(typedAnswer), 950);
	}, [typedAnswer]);

	return (
		<div className="flex-center--col gap-3 sm:flex-row">
			<Input.Text
				type={type === "currency" ? "text" : "number"}
				id="insert-answer"
				name="answer"
				value={typedAnswer}
				onChange={handleChange}
				customizedAttributes={{
					isInvalid: !userAnswerIsCorrect,
				}}
				className="w-32 md:w-auto h-10"
			>
				<span>R:</span>O resultado é{" "}
			</Input.Text>
		</div>
	);
});
