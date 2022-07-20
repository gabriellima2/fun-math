import { NextPage } from "next";
import { useContext, useEffect, useState } from "react";

import { useExercise } from "../hooks/Exercise/useExercise";

import { Canvas } from "../components/Canvas";
import { InsertAnswer } from "../components/InsertAnswer";

import { Customized } from "../layouts/Customized";
import { WithOptionSelected } from "../HOC/WithOptionSelected";

import { UserSelectedOptionsContext } from "../contexts/UserSelectedOptionsContext";
import { debounce } from "../utils/debouce";

const Exercises: NextPage = () => {
	const [value, setValue] = useState("");
	const { userSelectedOptions } = useContext(UserSelectedOptionsContext);

	const exercise = useExercise(userSelectedOptions);

	useEffect(() => {
		debounce(
			() => exercise?.checkUserAnswer(value, exercise.getCorrectResult),
			800
		);
	}, [value]);

	return (
		<Customized>
			<button onClick={exercise?.getNextExercise}>Pular Exercício</button>
			<div className="flex-center--col p-4">
				<h1 className="text-xl md:text-2xl lg:text-3xl text-center mb-4 tracking-wide">
					Exercícios de Situações-problema
				</h1>
				<p className="md:w-auto md:max-w-[640px] lg:max-w-[720px] text-sm md:text-base lg:text-lg text-left mb-4 md:mb-8">
					{exercise?.description}
				</p>
				<p>{exercise?.userAnswerIsCorrect ? "Certo" : "Errado"}</p>

				<section className="flex flex-col">
					<div className="self-end p-2 px-3 relative rounded-t-lg bg-canvas-area">
						<InsertAnswer value={value} changeValue={setValue} />
					</div>
					<div className="w-[95vw] max-w-fit md:max-h-[1/2] overflow-hidden">
						<Canvas />
					</div>
				</section>
			</div>
		</Customized>
	);
};

export default WithOptionSelected(Exercises);
