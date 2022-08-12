import { TextButton } from "../Buttons";

import { ClassName } from "../../types";

interface ChangeExerciseProps {
	onClick: () => void;
	exerciseIsCorrect: boolean | undefined;
	className?: ClassName;
}

export const ChangeExercise = (props: ChangeExerciseProps) => (
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
