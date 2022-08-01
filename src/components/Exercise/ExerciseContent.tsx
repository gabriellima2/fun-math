import React, {
	useEffect,
	useState,
	useContext,
	MutableRefObject,
} from "react";

import { useExercise } from "../../hooks/Exercise/useExercise";

import { TextButton } from "../../components/Buttons";
import { Status } from "../../components/Status";
import { Helpers } from "../../components/Helpers";
import { Input } from "../../components/Inputs";

import { CurrentExerciseContext } from "../../contexts/CurrentExerciseContext";

import { CanvasUtilsRef } from "../Draw/Canvas";
import { debounce } from "../../utils/debounce";

interface ExerciseContentProps {
	canvasUtilsRef: MutableRefObject<CanvasUtilsRef | null>;
}

interface InsertAnswerProps {
	value: string;
	onChange: (e: string) => void;
	inInvalid: boolean;
}

interface ChangeExerciseProps {
	onClick: () => void;
	exerciseIsCorrect: boolean | undefined;
}

const InsertAnswer = (props: InsertAnswerProps) => (
	<Input.Text
		type="number"
		id="insert-answer"
		name="answer"
		value={props.value}
		onChange={(e) => props.onChange(e.target.value)}
		isInvalid={props.inInvalid}
		className="w-32 md:w-auto h-10"
	>
		<span className="mr-1 font-semibold">R:</span>O resultado é{" "}
	</Input.Text>
);

const ChangeExercise = (props: ChangeExerciseProps) => (
	<TextButton
		type="button"
		onClick={props.onClick}
		className={`${
			props.exerciseIsCorrect && "text-green-400"
		} mt-4 text-xs md:text-sm font-util tracking-wider pointer-events-auto`}
	>
		<span aria-live="polite" aria-atomic="true">
			{props.exerciseIsCorrect ? "Próximo" : "Pular"}{" "}
		</span>
		Exercício
	</TextButton>
);

export const ExerciseContent = (props: ExerciseContentProps) => {
	const exercise = useExercise();
	const [typedAnswer, setTypedAnswer] = useState("");
	const { currentExercise } = useContext(CurrentExerciseContext);

	const preparationsForTheNextExercise = () => {
		setTypedAnswer("");
		exercise.clearUserAnswerIsCorrect();
		props.canvasUtilsRef.current?.clear();

		currentExercise.getNextExercise();
	};

	useEffect(() => {
		if (exercise.userAnswerIsCorrect !== undefined) {
			exercise.clearUserAnswerIsCorrect();
		}

		debounce(
			() => exercise.checkUserAnswer(typedAnswer, currentExercise.solution),
			950
		);
	}, [typedAnswer]);

	return (
		<>
			<section className="flex-center--row gap-2">
				<Helpers />

				<h1 className="text-3xl md:text-4xl text-center">
					{currentExercise.text}
				</h1>
			</section>
			<section className="flex-center--row gap-3">
				<InsertAnswer
					value={typedAnswer}
					onChange={setTypedAnswer}
					inInvalid={!exercise.userAnswerIsCorrect}
				/>
				{exercise.userAnswerIsCorrect !== undefined && (
					<Status type={exercise.userAnswerIsCorrect ? "success" : "error"} />
				)}
			</section>
			<ChangeExercise
				onClick={preparationsForTheNextExercise}
				exerciseIsCorrect={exercise.userAnswerIsCorrect}
			/>
		</>
	);
};
