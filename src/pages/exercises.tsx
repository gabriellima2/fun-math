import { NextPage } from "next";
import { useContext, useEffect, useState } from "react";

import { useExercise } from "../hooks/Exercise/useExercise";

import { InsertAnswer } from "../components/InsertAnswer";
import { TextButton } from "../components/Buttons";
import { Status } from "../components/Status";
import { Canvas } from "../components/Canvas";

import { Customized } from "../layouts/Customized";
import { WithOptionSelected } from "../HOC/WithOptionSelected";

import { UserSelectedOptionsContext } from "../contexts/UserSelectedOptionsContext";
import { debounce } from "../utils/debounce";

const Exercises: NextPage = () => {
	const [value, setValue] = useState("");
	const { userSelectedOptions } = useContext(UserSelectedOptionsContext);

	const exercise = useExercise(userSelectedOptions);

	const preparationsForTheNextExercise = () => {
		setValue("");
		exercise?.clearUserAnswerIsCorrect();
		exercise?.getNextExercise();
	};

	useEffect(() => {
		if (exercise?.userAnswerIsCorrect !== undefined) {
			exercise?.clearUserAnswerIsCorrect();
		}

		debounce(
			() => exercise?.checkUserAnswer(value, exercise.getCorrectResult),
			950
		);
	}, [value]);

	return (
		<Customized>
			<div className="flex-center--col gap-8 px-2 py-6">
				<main className="w-full flex-center--col gap-2 sticky top-0 pt-2">
					<h1 className="text-3xl md:text-4xl text-center tracking-wide mb-4">
						{exercise?.description}
					</h1>
					<div className="flex-center--row gap-3">
						<InsertAnswer
							value={value}
							changeValue={setValue}
							isInvalid={exercise?.userAnswerIsCorrect}
						/>
						{exercise?.userAnswerIsCorrect !== undefined && (
							<Status
								type={exercise?.userAnswerIsCorrect ? "success" : "error"}
							/>
						)}
					</div>
				</main>

				<section className="flex-center--col gap-3">
					<div className="w-[95vw] xl:w-[70vw] max-w-fit md:max-h-[1/2] overflow-hidden relative">
						<span className="w-full flex justify-between pointer-events-none p-4 absolute top-0">
							<p className="text-sm pointer-events-none font-medium text-white/50">
								Espaço para rascunho
							</p>
							<TextButton
								type="button"
								onClick={preparationsForTheNextExercise}
								className={`${
									exercise?.userAnswerIsCorrect && "text-green-400"
								} text-xs md:text-sm font-util tracking-wider pointer-events-auto`}
							>
								<span aria-live="polite" aria-atomic="true">
									{exercise?.userAnswerIsCorrect ? "Próximo" : "Pular"}{" "}
								</span>
								Exercício
							</TextButton>
						</span>
						<Canvas />
					</div>
				</section>
			</div>
		</Customized>
	);
};

export default WithOptionSelected(Exercises);
