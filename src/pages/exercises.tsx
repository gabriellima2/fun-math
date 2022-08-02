import { NextPage } from "next";

import React, { useContext, useRef, useState } from "react";

import { Canvas } from "../components/Draw";
import { UseExerciseMode, ExerciseContent } from "../components/Exercise";
import { WithOptionSelected } from "../HOC/WithOptionSelected";

import { UserSelectedOptionsContext } from "../contexts/UserSelectedOptionsContext";
import { CanvasUtils } from "../components/Draw/Canvas";
import { exercises } from "../constants";
import { CanvasElement, CanvasUtilsRef } from "../types";

const Exercises: NextPage = () => {
	const canvasUtilsRef = useRef<CanvasUtilsRef>(null);
	const canvasElementRef = useRef<CanvasElement>(null);
	const { userSelectedOptions } = useContext(UserSelectedOptionsContext);

	if (!userSelectedOptions) return null;

	return (
		<>
			<div className="flex-center--col gap-8 px-2 py-6">
				<main className="w-full flex-center--col gap-2 sticky top-0 py-3 bg-main/60">
					{userSelectedOptions.exercise?.mode == exercises.mode.fetch ? (
						<UseExerciseMode.Fetch query={null} />
					) : (
						<UseExerciseMode.Client operator={userSelectedOptions.operator} />
					)}
					<ExerciseContent canvasUtilsRef={canvasUtilsRef} />
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
