import { NextPage } from "next";
import React, { useContext, useRef } from "react";
import { BsArrowUp } from "react-icons/bs";

import {
	ExerciseTextPreview,
	ChangeExercise,
	GenerateExercise,
} from "@components/Exercise";
import { InsertAnswer, InsertAnswerRef } from "@components/InsertAnswer";
import { BackButton } from "@components/Buttons";
import { Helpers } from "@components/Helpers";
import { Status } from "@components/Status";
import { Loading } from "@components/Infra";
import { Canvas } from "@components/Draw";
import { Icon } from "@components/Icon";

import { WithOptionSelected } from "../HOC/WithOptionSelected";

import { UserSelectedOptionsContext } from "@contexts/UserSelectedOptionsContext";
import { CurrentExerciseContext } from "@contexts/CurrentExerciseContext";

import { CanvasUtilsRef } from "@globalTypes";

const Exercises: NextPage = () => {
	const insertAnswerRef = useRef<null | InsertAnswerRef>(null);
	const canvasUtilsRef = useRef<CanvasUtilsRef>(null);

	const { currentExercise, clearCorrection } = useContext(
		CurrentExerciseContext
	);
	const { userSelectedOptions } = useContext(UserSelectedOptionsContext);

	const preparationsForTheNextExercise = () => {
		clearCorrection();

		insertAnswerRef.current?.clearInsertAnswerValue();
		canvasUtilsRef.current?.clearCanvas();

		currentExercise.getNextExercise();
	};

	if (Object.keys(userSelectedOptions).length <= 0) return null;

	return (
		<>
			<GenerateExercise generateMode={userSelectedOptions.exercise!.mode}>
				{Object.keys(currentExercise).length <= 0 ? (
					<Loading.FullScreen />
				) : (
					<>
						<main id="top" className="relative gradient-background">
							<span className="fixed top-8 left-10">
								<BackButton href="/choose-options" />
							</span>
							<span className="fixed top-8 right-10">
								<Helpers />
							</span>

							<section className="w-full max-w-[1000px] mt-28 sm:mt-36 mb-14 flex-center--col px-8">
								<div className="w-full sm:max-h-fit flex-center--col bg-black-800/40 rounded-md border-black-600/30 border-8 p-6 px-8">
									<div
										aria-live="polite"
										aria-atomic="true"
										className="flex-center--col gap-2"
									>
										<span className="text-sm md:text-base describe-text capitalize">
											Responda
										</span>
										<h1 className="text-xl h-fit overflow-y-auto sm:overflow-y-hidden md:text-4xl font-bold text-left">
											{currentExercise.text}
										</h1>
									</div>

									<Status>
										<InsertAnswer ref={insertAnswerRef} />
									</Status>

									<ChangeExercise
										onClick={preparationsForTheNextExercise}
										className="self-end mr-4"
									/>
								</div>
							</section>
						</main>

						<section id="canvas-area" className="w-full flex-center--col p-6">
							<div className="w-[95vw] max-w-fit lg:w-[70vw] flex-center--col overflow-x-hidden">
								<section className="w-full flex items-center justify-evenly px-2 py-4">
									<ExerciseTextPreview />
									<a
										href="#top"
										className="flex-center--row gap-2 text-sm describe-text"
									>
										<Icon
											element={BsArrowUp}
											label="Seta para cima indicando a área de responder"
											className="text-xl"
										/>
										Responder
									</a>
								</section>
								<Canvas ref={canvasUtilsRef} />
							</div>
						</section>
					</>
				)}
			</GenerateExercise>
		</>
	);
};

export default WithOptionSelected(Exercises);
