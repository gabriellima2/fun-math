import { useContext } from "react";

import { CurrentExerciseContext } from "@contexts/CurrentExerciseContext";
import type { ButtonDefaultProps } from "@interfaces/IDefaultProps";

interface ChangeExerciseButtonProps extends Omit<ButtonDefaultProps, "type"> {}

export const ChangeExerciseButton = (props: ChangeExerciseButtonProps) => {
	const { userAnswerIsCorrect } = useContext(CurrentExerciseContext);

	return (
		<button
			{...props}
			type="button"
			className={`${userAnswerIsCorrect && "text-green-400"} ${
				props.className
			} mt-4 text-xs md:text-sm font-main tracking-wider pointer-events-auto`}
		>
			<span aria-live="polite" aria-atomic="true">
				{userAnswerIsCorrect ? "Próximo" : "Pular"}{" "}
			</span>
			Exercício
		</button>
	);
};
