import type { ButtonDefaultProps } from "src/@types/IDefaultProps";

interface ChangeExerciseButtonProps extends Omit<ButtonDefaultProps, "type"> {}

export const ChangeExerciseButton = (props: ChangeExerciseButtonProps) => (
	<button
		{...props}
		title="Ir para o próximo exercício"
		type="button"
		className={`${props.className} text-xs sm:text-sm underline transition focus:opacity-50 hover:opacity-50`}
	>
		Próximo Exercício
	</button>
);
