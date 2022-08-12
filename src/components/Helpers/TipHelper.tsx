import { useContext } from "react";

import { CurrentExerciseContext } from "../../contexts/CurrentExerciseContext";

const ButtonText = () => <>Quero alguma dica</>;

const Content = () => {
	const { currentExercise } = useContext(CurrentExerciseContext);

	return (
		<h2 className="text-sm md:text-base">
			{currentExercise.tip
				? currentExercise.tip
				: "Desculpe, no momento não temos dicas específicas para esse exercício."}
		</h2>
	);
};

export const TipHelper = { ButtonText, Content };
