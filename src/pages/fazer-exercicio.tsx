import { NextPage } from "next";

import {
	ValidateQueriesFromURL,
	ValidateQueriesFromURLInjectedProps,
} from "../HOC/ValidateQueriesFromURL";

interface DoExerciseProps extends ValidateQueriesFromURLInjectedProps {}

const DoExercise: NextPage<DoExerciseProps> = ({
	injectedProps: { operator, type },
}) => {
	return (
		<h1>
			{operator} {type}
		</h1>
	);
};

export default ValidateQueriesFromURL(DoExercise);
