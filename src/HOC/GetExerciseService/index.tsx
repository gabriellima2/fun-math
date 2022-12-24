import Error from "next/error";

import { useMathProblems, useRandomCalculation } from "./hooks";

import { ExerciseNames } from "@constants";
import type { ValidateExerciseQueriesInjectedProps } from "@hoc/ValidateExerciseQueries";
import type { OutputExerciseDTO } from "@dtos/exercise-dto";
import type { Component } from "@global-types/TGlobals";

interface IRenderExercise {
	type: string;
	exerciseFetcher: () => Promise<{
		data: OutputExerciseDTO | null;
		message?: string;
	}>;
}

export interface GetExerciseServiceProps
	extends ValidateExerciseQueriesInjectedProps {}

export interface GetExerciseServiceInjectedProps {
	injectedProps: IRenderExercise;
}

export function GetExerciseService<P extends GetExerciseServiceProps>(
	Component: Component<P>
) {
	return function HOC(props: P) {
		const { handle: getRandomCalculation } = useRandomCalculation();
		const { handle: getMathProblems } = useMathProblems();

		const renderExerciseList: IRenderExercise[] = [
			{
				type: ExerciseNames.random,
				exerciseFetcher: () =>
					getRandomCalculation(props.injectedProps.operator!),
			},
			{
				type: ExerciseNames.problem,
				exerciseFetcher: () => getMathProblems(),
			},
		];

		const renderExercise = renderExerciseList.find((exercise) => {
			return exercise.type === props.injectedProps.type;
		});

		if (!renderExercise) {
			return <Error statusCode={404} />;
		}

		return (
			<Component {...(props as P)} injectedProps={{ ...renderExercise }} />
		);
	};
}
