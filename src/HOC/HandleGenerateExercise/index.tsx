import type { ValidateQueriesFromURLInjectedProps } from "@hoc/ValidateQueriesFromURL";
import type { IRenderExercise } from "@interfaces/IExercise";
import type { Component } from "@globalTypes/TGlobals";
import { ExerciseNames } from "@constants/index";

interface HandleGenerateExerciseProps
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
				Render: () => <h1>Gerando Aleatório</h1>,
			},
			{
				type: ExerciseNames.problem,
				Render: () => <h1>Gerando Problema</h1>,
			},
		];

		const renderExercise = renderExerciseList.find((exercise) => {
			return exercise.type === props.injectedProps.type;
		});

		return (
			<Component {...(props as P)} injectedProps={{ ...renderExercise }} />
		);
	};
}
