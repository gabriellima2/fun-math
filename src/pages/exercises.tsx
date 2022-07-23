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

	useEffect(() => {
		if (!value) return;

		debounce(
			() => exercise?.checkUserAnswer(value, exercise.getCorrectResult),
			950
		);
	}, [value]);

	return (
		<Customized>
			<div className="flex-center--col gap-8 px-2 pb-6">
				<main className="w-full flex-center--col gap-2">
					<h1 className="text-lg md:text-2xl lg:text-3xl text-center tracking-wide mb-4">
						{exercise?.description}
					</h1>
					<div>
						<InsertAnswer value={value} changeValue={setValue} />
					</div>
				</main>

				<section className="flex-center--col gap-3">
					<div className="w-full sm:self-end sm:w-1/3 ">
						<Status
							type={
								exercise?.userAnswerIsCorrect == null
									? "default"
									: exercise?.userAnswerIsCorrect
									? "success"
									: "error"
							}
						/>
					</div>
					<div className="w-[95vw] max-w-fit md:max-h-[1/2] overflow-hidden relative">
						<span className="w-full flex justify-between pointer-events-none p-4 absolute top-0">
							<p className="text-sm pointer-events-none font-medium text-white/50">
								Espaço para rascunho
							</p>
							<TextButton
								type="button"
								onClick={exercise?.getNextExercise}
								className="text-xs md:text-sm pointer-events-auto"
							>
								Pular exercício
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
