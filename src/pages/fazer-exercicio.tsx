import { NextPage } from "next";

import {
	HandleGenerateExercise,
	HandleGenerateExerciseInjectedProps,
} from "@hoc/HandleGenerateExercise";
import { ValidateQueriesFromURL } from "@hoc/ValidateQueriesFromURL";

interface DoExerciseProps extends HandleGenerateExerciseInjectedProps {}

const DoExercise: NextPage<DoExerciseProps> = ({
	injectedProps: { Render, type },
}) => {
	console.log(Render);

	return (
		<>
			{Render()}
			<h1>{type}</h1>
		</>
	);
};

export default ValidateQueriesFromURL(HandleGenerateExercise(DoExercise));
