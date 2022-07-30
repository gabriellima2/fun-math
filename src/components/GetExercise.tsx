import React, { useEffect, useState } from "react";
import { useQuery, gql } from "@apollo/client";

import { useExercise } from "../hooks/Exercise/useExercise";
import { useExerciseClient } from "../hooks/Exercise/useExerciseClient";

import { TextButton } from "../components/Buttons";
import { Status } from "../components/Status";
import { Helpers } from "../components/Helpers";
import { Input } from "../components/Inputs";

import { ExerciseMode } from "../types/hooks";
import { Operators } from "../types";
import { debounce } from "../utils/debounce";

interface ContentProps extends ExerciseMode {}

interface ClientExerciseProps {
	operator: Operators;
}

interface FetchExerciseProps {
	query: ReturnType<typeof gql>;
}

const Content = (props: ContentProps) => {
	const exercise = useExercise();
	const [typedAnswer, setTypedAnswer] = useState("");

	const preparationsForTheNextExercise = () => {
		setTypedAnswer("");
		exercise.clearUserAnswerIsCorrect();
		props.getNextExercise();
	};

	useEffect(() => {
		if (exercise.userAnswerIsCorrect !== undefined) {
			exercise.clearUserAnswerIsCorrect();
		}

		debounce(() => exercise.checkUserAnswer(typedAnswer, props.solution), 950);
	}, [typedAnswer]);

	return (
		<>
			<section className="flex-center--row gap-2">
				<Helpers />

				<h1 className="text-3xl md:text-4xl text-center">{props.text}</h1>
			</section>
			<section className="flex-center--row gap-3">
				<Input.Text
					type="number"
					id="insert-answer"
					name="answer"
					value={typedAnswer}
					onChange={(e) => setTypedAnswer(e.target.value)}
					isInvalid={!exercise.userAnswerIsCorrect}
					className="w-32 md:w-auto h-10"
				>
					<span className="mr-1 font-semibold">R:</span>O resultado é{" "}
				</Input.Text>
				{exercise.userAnswerIsCorrect !== undefined && (
					<Status type={exercise.userAnswerIsCorrect ? "success" : "error"} />
				)}
			</section>
			<TextButton
				type="button"
				onClick={preparationsForTheNextExercise}
				className={`${
					exercise.userAnswerIsCorrect && "text-green-400"
				} mt-4 text-xs md:text-sm font-util tracking-wider pointer-events-auto`}
			>
				<span aria-live="polite" aria-atomic="true">
					{exercise.userAnswerIsCorrect ? "Próximo" : "Pular"}{" "}
				</span>
				Exercício
			</TextButton>
		</>
	);
};

const ClientExercise = (props: ClientExerciseProps) => {
	const exerciseClient = useExerciseClient(props.operator);

	return <Content {...exerciseClient} />;
};

const FetchExercise = (props: FetchExerciseProps) => {
	const { loading, error, data } = useQuery(props.query);

	if (error) return <h1>Error</h1>;

	return <>{loading ? <h1>Loading</h1> : <Content {...data} />}</>;
};

export const GetExercise = { ClientExercise, FetchExercise };
