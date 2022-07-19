import { NextPage } from "next";
import { useContext, useState } from "react";

import { useExercise } from "../hooks/Exercise/useExercise";

import { Canvas } from "../components/Canvas";

import { Customized } from "../layouts/Customized";
import { WithOptionSelected } from "../HOC/WithOptionSelected";

import { UserSelectedOptionsContext } from "../contexts/UserSelectedOptionsContext";

const Exercises: NextPage = () => {
	const [value, setValue] = useState("");
	const { userSelectedOptions } = useContext(UserSelectedOptionsContext);

	const exercise = useExercise(userSelectedOptions);

	return (
		<Customized>
			<button onClick={exercise?.getNextExercise}>Pular Exercício</button>
			<div className="flex-center--col p-4">
				<h1 className="text-xl md:text-2xl lg:text-3xl text-center mb-4 tracking-wide">
					Exercícios de Situações-problema
				</h1>
				<p className="md:w-auto md:max-w-[640px] lg:max-w-[720px] text-sm md:text-base lg:text-lg text-left mb-4 md:mb-8">
					<span>{exercise?.description}</span>
				</p>

				<div>
					<input
						type="text"
						value={value}
						onChange={(e) => setValue(e.target.value)}
					/>
					<button
						type="button"
						onClick={() =>
							exercise?.checkUserAnswer(value, exercise.getCorrectResult)
						}
					>
						Pronto
					</button>
				</div>

				<p>{exercise?.userAnswerIsCorrect ? "Certo" : "Errado"}</p>

				<section>
					<div className="w-[95vw] max-w-fit md:max-h-[1/2] overflow-hidden">
						<Canvas />
					</div>
				</section>
			</div>
		</Customized>
	);
};

export default WithOptionSelected(Exercises);
