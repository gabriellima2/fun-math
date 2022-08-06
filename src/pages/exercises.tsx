import { NextPage } from "next";
import React, { useContext, useRef } from "react";

import { Canvas } from "../components/Draw";
import { ExerciseMode, ExerciseContent } from "../components/Exercise";
import { Helpers } from "../components/Helpers";
import { WithOptionSelected } from "../HOC/WithOptionSelected";

import { UserSelectedOptionsContext } from "../contexts/UserSelectedOptionsContext";
import { exercises } from "../constants";
import { CanvasUtilsRef } from "../types";

const Exercises: NextPage = () => {
	const canvasUtilsRef = useRef<CanvasUtilsRef>(null);
	const { userSelectedOptions } = useContext(UserSelectedOptionsContext);

	if (Object.keys(userSelectedOptions).length <= 0) return null;

	return (
		<>
			<div className="flex-center--col gap-8 px-2 py-6">
				<main
					aria-live="polite"
					aria-atomic="true"
					className="w-full flex-center--col gap-2 sticky top-0 py-3 bg-main/60"
				>
					{userSelectedOptions.exercise?.mode == exercises.mode.fetch ? (
						<ExerciseMode.Fetch
							queryName={userSelectedOptions.exercise.queryName!}
						>
							<>
								<Helpers />
								<ExerciseContent canvasUtilsRef={canvasUtilsRef} />
							</>
						</ExerciseMode.Fetch>
					) : (
						<ExerciseMode.Client operator={userSelectedOptions.operator!}>
							<>
								<Helpers />
								<ExerciseContent canvasUtilsRef={canvasUtilsRef} />
							</>
						</ExerciseMode.Client>
					)}
				</main>

				<section className="flex-center--col gap-3">
					<div className="w-[95vw] xl:w-[70vw] max-w-fit md:max-h-[1/2] overflow-hidden">
						<span className="w-full flex justify-between pointer-events-none p-4">
							<p className="text-sm pointer-events-none font-medium text-white/50">
								Espaço para rascunho
							</p>
						</span>
						<Canvas ref={canvasUtilsRef} />
					</div>
				</section>
			</div>
		</>
	);
};

export default WithOptionSelected(Exercises);
