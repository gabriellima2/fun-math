import { NextPage } from "next";
import React, { useContext, useEffect, useRef, useState } from "react";
import { BsArrowDown, BsArrowUp } from "react-icons/bs";

import { useExerciseUtils } from "../hooks/Exercise";

import {
	ExerciseTextPreview,
	ChangeExercise,
	GenerateExercise,
} from "../components/Exercise";
import { InsertAnswer } from "../components/InsertAnswer";
import { BackButton } from "../components/Buttons";
import { Helpers } from "../components/Helpers";
import { Status } from "../components/Status";
import { Loading } from "../components/Infra";
import { Canvas } from "../components/Draw";
import { Icon } from "../components/Icon";

import { WithOptionSelected } from "../HOC/WithOptionSelected";

import { UserSelectedOptionsContext } from "../contexts/UserSelectedOptionsContext";
import { CurrentExerciseContext } from "../contexts/CurrentExerciseContext";
import { debounce } from "../utils/debounce";
import { CanvasUtilsRef } from "../types";

const ANCHORS_STYLE = "flex-center--row gap-2 text-sm describe-text";

const Exercises: NextPage = () => {
	const exerciseUtils = useExerciseUtils();
	const [typedAnswer, setTypedAnswer] = useState("");

	const canvasUtilsRef = useRef<CanvasUtilsRef>(null);

	const { currentExercise } = useContext(CurrentExerciseContext);
	const { userSelectedOptions } = useContext(UserSelectedOptionsContext);

	const preparationsForTheNextExercise = () => {
		setTypedAnswer("");
		exerciseUtils.clearUserAnswerIsCorrect();
		canvasUtilsRef?.current?.clearCanvas();

		currentExercise.getNextExercise();
	};

	useEffect(() => {
		if (exerciseUtils.userAnswerIsCorrect !== undefined) {
			exerciseUtils.clearUserAnswerIsCorrect();
		}

		if (!currentExercise?.result) return;

		debounce(
			() => exerciseUtils.checkUserAnswer(typedAnswer, currentExercise.result!),
			950
		);
	}, [typedAnswer]);

	if (Object.keys(userSelectedOptions).length <= 0) return null;

	return (
		<>
			<GenerateExercise generateMode={userSelectedOptions.exercise!.mode}>
				{Object.keys(currentExercise).length <= 0 ? (
					<Loading.FullScreen />
				) : (
					<>
						<main id="top" className="relative gradient-background">
							<section className="w-screen flex items-center justify-between fixed top-12 px-12">
								<BackButton specificRoute="/choose-options" />
								<Helpers />
							</section>

							<section className="w-full flex-center--col px-8">
								<div className="w-full max-w-[1000px] max-h-[90vh] sm:max-h-fit flex-center--col bg-black-800/40 rounded-md border-black-600/30 border-8 p-6 px-8">
									<div
										aria-live="polite"
										aria-atomic="true"
										className="flex-center--col gap-2"
									>
										<span className="text-sm md:text-base describe-text capitalize">
											Responda
										</span>
										<h1 className="text-xl max-h-[30vh] sm:max-h-fit overflow-y-auto sm:overflow-y-hidden md:text-4xl font-bold text-left">
											{currentExercise.text}
										</h1>
									</div>

									<Status isCorrect={exerciseUtils.userAnswerIsCorrect}>
										<InsertAnswer
											value={typedAnswer}
											onChange={setTypedAnswer}
											isInvalid={!exerciseUtils.userAnswerIsCorrect}
										/>
									</Status>

									<ChangeExercise
										onClick={preparationsForTheNextExercise}
										exerciseIsCorrect={exerciseUtils.userAnswerIsCorrect}
										className="self-end mr-4"
									/>
								</div>
							</section>

							<a
								href="#canvas-area"
								className={`${ANCHORS_STYLE} animate-bounce absolute bottom-12`}
							>
								Área de Rascunhos
								<Icon
									element={BsArrowDown}
									label="Seta para baixo indicando a Área de Desenho"
									className="text-xl"
								/>
							</a>
						</main>

						<section id="canvas-area" className="w-full flex-center--col p-6">
							<div className="w-[95vw] max-w-fit lg:w-[70vw] flex-center--col overflow-x-hidden">
								<section className="w-full flex items-center justify-evenly px-2 py-4">
									<ExerciseTextPreview />
									<a href="#top" className={`${ANCHORS_STYLE}`}>
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
