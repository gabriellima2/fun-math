import { NextPage } from "next";
import React, { useContext, useRef } from "react";

import { Canvas } from "../components/Draw";
import { GenerateExercise, ExerciseContent } from "../components/Exercise";
import { Helpers } from "../components/Helpers";
import { WithOptionSelected } from "../HOC/WithOptionSelected";

import { UserSelectedOptionsContext } from "../contexts/UserSelectedOptionsContext";
import { CanvasUtilsRef } from "../types";
import { Icon } from "../components/Icon";
import { BsArrowBarDown, BsArrowDown, BsPencilSquare } from "react-icons/bs";

const Exercises: NextPage = () => {
	const canvasUtilsRef = useRef<CanvasUtilsRef>(null);
	const { userSelectedOptions } = useContext(UserSelectedOptionsContext);

	if (Object.keys(userSelectedOptions).length <= 0) return null;

	return (
		<>
			<GenerateExercise generateMode={userSelectedOptions.exercise!.mode}>
				<main
					aria-live="polite"
					aria-atomic="true"
					className="h-screen flex-center--col relative bg-exercise bg-cover bg-no-repeat bg-center"
				>
					<span className="fixed top-12 right-12">
						<Helpers />
					</span>
					<section className="w-full flex-center--col px-8">
						<ExerciseContent canvasUtilsRef={canvasUtilsRef} />
					</section>
					<p className="flex-center--col gap-2 absolute bottom-12 animate-bounce text-sm describe-text">
						Área de Rascunhos
						<Icon
							element={BsArrowDown}
							label="Seta para baixo indicando a Área de Desenho"
							className="text-xl"
						/>
					</p>
				</main>

				<section>
					<div className="w-[95vw] xl:w-[70vw] max-w-fit md:max-h-[1/2] overflow-hidden">
						<span className="w-full flex justify-between pointer-events-none p-4">
							<p className="text-sm pointer-events-none font-medium text-white/50">
								Espaço para rascunho
							</p>
						</span>
						<Canvas ref={canvasUtilsRef} />
					</div>
				</section>
			</GenerateExercise>
		</>
	);
};

export default WithOptionSelected(Exercises);
