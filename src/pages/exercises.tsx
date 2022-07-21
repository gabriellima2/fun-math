import { NextPage } from "next";
import { useContext, useEffect, useState } from "react";

import { useExercise } from "../hooks/Exercise/useExercise";

import { Canvas } from "../components/Canvas";
import { InsertAnswer } from "../components/InsertAnswer";
import { TextButton } from "../components/Buttons";

import { Customized } from "../layouts/Customized";
import { WithOptionSelected } from "../HOC/WithOptionSelected";

import { UserSelectedOptionsContext } from "../contexts/UserSelectedOptionsContext";
import { debounce } from "../utils/debouce";

const Exercises: NextPage = () => {
	const [value, setValue] = useState("");
	const { userSelectedOptions } = useContext(UserSelectedOptionsContext);

	const exercise = useExercise(userSelectedOptions);

	useEffect(() => {
		if (!value) return;

		debounce(
			() => exercise?.checkUserAnswer(value, exercise.getCorrectResult),
			800
		);
	}, [value]);

	return (
		<Customized>
			<div className="flex-center--col p-4">
				<main className="flex flex-col">
					<h1 className="text-xl md:text-2xl lg:text-3xl text-center tracking-wide mb-4">
						{exercise?.description}
					</h1>
					<section className="flex-center--col">
						<div className="self-end p-2 px-3 relative rounded-t-lg bg-canvas-area">
							<InsertAnswer value={value} changeValue={setValue} />
						</div>
						<div className="w-[95vw] max-w-fit md:max-h-[1/2] overflow-hidden">
							<Canvas />
						</div>
						<div className="self-start">
							<TextButton
								type="button"
								onClick={exercise?.getNextExercise}
								className="mt-4 ml-4 text-sm md:text-base"
							>
								Pular exercício
							</TextButton>
						</div>
					</section>
				</main>
			</div>
		</Customized>
	);
};

export default WithOptionSelected(Exercises);
