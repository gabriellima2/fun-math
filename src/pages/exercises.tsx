import { NextPage } from "next";
import React, { useContext, useEffect, useState } from "react";

import { useExercise } from "../hooks/Exercise/useExercise";

import { TextButton } from "../components/Buttons";
import { Status } from "../components/Status";
import { Canvas } from "../components/Canvas";
import { Helpers } from "../components/Helpers";
import { Input } from "../components/Inputs";

import { WithOptionSelected } from "../HOC/WithOptionSelected";

import { UserSelectedOptionsContext } from "../contexts/UserSelectedOptionsContext";
import { debounce } from "../utils/debounce";

const Exercises: NextPage = () => {
	const [typedAnswer, setTypedAnswer] = useState("");
	const { userSelectedOptions } = useContext(UserSelectedOptionsContext);

	const exercise = useExercise(userSelectedOptions);

	const preparationsForTheNextExercise = () => {
		setTypedAnswer("");
		exercise?.clearUserAnswerIsCorrect();
		exercise?.getNextExercise();
	};

	useEffect(() => {
		if (exercise?.userAnswerIsCorrect !== undefined) {
			exercise?.clearUserAnswerIsCorrect();
		}

		debounce(
			() => exercise?.checkUserAnswer(typedAnswer, exercise.getCorrectResult),
			950
		);
	}, [typedAnswer]);

	return (
		<>
			<div className="flex-center--col gap-8 px-2 py-6">
				<main className="w-full flex-center--col gap-2 sticky top-0 py-3 bg-main/60">
					<section className="flex-center--row gap-2">
						<Helpers />

						<h1 className="text-3xl md:text-4xl text-center">
							{exercise?.description}
						</h1>
					</section>
					<section className="flex-center--row gap-3">
						<Input.Text
							type="number"
							id="insert-answer"
							name="answer"
							value={typedAnswer}
							onChange={(e) => setTypedAnswer(e.target.value)}
							isInvalid={!exercise?.userAnswerIsCorrect}
							className="w-32 md:w-auto h-10"
						>
							<span className="mr-1 font-semibold">R:</span>O resultado é{" "}
						</Input.Text>
						{exercise?.userAnswerIsCorrect !== undefined && (
							<Status
								type={exercise?.userAnswerIsCorrect ? "success" : "error"}
							/>
						)}
					</section>
					<TextButton
						type="button"
						onClick={preparationsForTheNextExercise}
						className={`${
							exercise?.userAnswerIsCorrect && "text-green-400"
						} mt-4 text-xs md:text-sm font-util tracking-wider pointer-events-auto`}
					>
						<span aria-live="polite" aria-atomic="true">
							{exercise?.userAnswerIsCorrect ? "Próximo" : "Pular"}{" "}
						</span>
						Exercício
					</TextButton>
				</main>

				<section className="flex-center--col gap-3">
					<div className="w-[95vw] xl:w-[70vw] max-w-fit md:max-h-[1/2] overflow-hidden">
						<span className="w-full flex justify-between pointer-events-none p-4">
							<p className="text-sm pointer-events-none font-medium text-white/50">
								Espaço para rascunho
							</p>
						</span>
						<Canvas />
					</div>
				</section>
			</div>
		</>
	);
};

//export default WithOptionSelected(Exercises);
export default Exercises;
