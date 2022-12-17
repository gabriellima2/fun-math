import Error from "next/error";

import type { ValidateQueriesFromURLInjectedProps } from "@hoc/ValidateQueriesFromURL";
import type { Component } from "@global-types/TGlobals";
import { ExerciseNames } from "@constants";

interface IRenderExercise {
	type: string;
	Render: () => JSX.Element;
}

export interface HandleGenerateExerciseProps
	extends ValidateQueriesFromURLInjectedProps {}

export interface HandleGenerateExerciseInjectedProps {
	injectedProps: IRenderExercise;
}

export function HandleGenerateExercise<P extends HandleGenerateExerciseProps>(
	Component: Component<P>
) {
	return function HOC(props: P) {
		const renderExerciseList: IRenderExercise[] = [
			{
				type: ExerciseNames.random,
				Render: () => <div></div>,
			},
			{
				type: ExerciseNames.problem,
				Render: () => <div></div>,
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
