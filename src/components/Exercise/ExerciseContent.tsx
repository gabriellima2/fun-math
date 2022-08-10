import React, {
	useEffect,
	useState,
	useContext,
	MutableRefObject,
} from "react";

import { useExerciseUtils } from "../../hooks/Exercise/useExerciseUtils";

import { TextButton } from "../../components/Buttons";
import { Status } from "../../components/Status";
import { Input } from "../../components/Inputs";

import { CurrentExerciseContext } from "../../contexts/CurrentExerciseContext";

import { CanvasUtilsRef, ClassName } from "../../types";
import { debounce } from "../../utils/debounce";

interface ExerciseContentProps {
	canvasUtilsRef: MutableRefObject<CanvasUtilsRef>;
}

interface InsertAnswerProps {
	value: string;
	onChange: (e: string) => void;
	inInvalid: boolean;
}

interface ChangeExerciseProps {
	onClick: () => void;
	exerciseIsCorrect: boolean | undefined;
	className?: ClassName;
}

const InsertAnswer = (props: InsertAnswerProps) => (
	<div className="flex-center--col gap-3 sm:flex-row">
		<Input.Text
			type="text"
			id="insert-answer"
			name="answer"
			value={props.value}
			onChange={(e) => props.onChange(e.target.value)}
			isInvalid={props.inInvalid}
			className="w-32 md:w-auto h-10"
		>
			<span>R:</span>O resultado é{" "}
		</Input.Text>
	</div>
);

const ChangeExercise = (props: ChangeExerciseProps) => (
	<TextButton
		type="button"
		onClick={props.onClick}
		className={`${props.exerciseIsCorrect && "text-green-400"} ${
			props.className
		} mt-4 text-xs md:text-sm font-main tracking-wider pointer-events-auto`}
	>
		<span aria-live="polite" aria-atomic="true">
			{props.exerciseIsCorrect ? "Próximo" : "Pular"}{" "}
		</span>
		Exercício
	</TextButton>
);

export const ExerciseContent = (props: ExerciseContentProps) => {
	const exerciseUtils = useExerciseUtils();
	const [typedAnswer, setTypedAnswer] = useState("");
	const { currentExercise } = useContext(CurrentExerciseContext);

	const preparationsForTheNextExercise = () => {
		setTypedAnswer("");
		exerciseUtils.clearUserAnswerIsCorrect();
		props.canvasUtilsRef?.current?.clearCanvas();

		currentExercise.getNextExercise();
	};

	useEffect(() => {
		if (exerciseUtils.userAnswerIsCorrect !== undefined) {
			exerciseUtils.clearUserAnswerIsCorrect();
		}

		if (!currentExercise?.result) return;

		debounce(
			() => exerciseUtils.checkUserAnswer(typedAnswer, currentExercise.result!),
			950
		);
	}, [typedAnswer]);

	return (
		<div className="w-full max-w-[1000px] flex-center--col bg-black-800/40 rounded-md border-black-600/30 border-8 p-6 px-8">
			<div className="flex-center--col gap-2">
				<span className="text-sm md:text-base describe-text capitalize">
					Responda
				</span>
				<h1 className="text-2xl md:text-4xl font-bold text-center">
					{currentExercise.text}
				</h1>
			</div>
			<section
				className={`${
					exerciseUtils.userAnswerIsCorrect === undefined
						? "from-black-700 via-black-800"
						: exerciseUtils.userAnswerIsCorrect
							? "from-green-800/30"
						: "from-red-800/30"
				} bg-gradient-to-l w-full flex-center--row gap-4 mt-12 p-6 md:p-10 rounded-md`}
			>
				<InsertAnswer
					value={typedAnswer}
					onChange={setTypedAnswer}
					inInvalid={!exerciseUtils.userAnswerIsCorrect}
				/>
				{exerciseUtils.userAnswerIsCorrect !== undefined && (
					<Status
						type={exerciseUtils.userAnswerIsCorrect ? "success" : "error"}
					/>
				)}
			</section>
			<ChangeExercise
				onClick={preparationsForTheNextExercise}
				exerciseIsCorrect={exerciseUtils.userAnswerIsCorrect}
				className="self-end mr-4"
			/>
		</div>
	);
};
