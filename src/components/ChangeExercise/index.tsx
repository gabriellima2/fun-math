import { useContext } from "react";

import { MainButton } from "../Buttons";

import { CurrentExerciseContext } from "@contexts/CurrentExerciseContext";
import type { ClassName } from "@globalTypes";

interface ChangeExerciseProps {
	onClick: () => void;
	className?: ClassName;
}

export const ChangeExercise = (props: ChangeExerciseProps) => {
	const { userAnswerIsCorrect } = useContext(CurrentExerciseContext);

	return (
		<MainButton
			type="button"
			variants="text"
			onClick={props.onClick}
			className={`${userAnswerIsCorrect && "text-green-400"} ${
				props.className
			} mt-4 text-xs md:text-sm font-main tracking-wider pointer-events-auto`}
		>
			<span aria-live="polite" aria-atomic="true">
				{userAnswerIsCorrect ? "Próximo" : "Pular"}{" "}
			</span>
			Exercício
		</MainButton>
	);
};
