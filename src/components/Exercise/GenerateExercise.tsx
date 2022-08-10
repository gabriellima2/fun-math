import React, { useContext, ReactNode } from "react";

import {
	useExerciseFetch,
	useExerciseClient,
	useExerciseDataHandler,
} from "../../hooks/Exercise";

import { Error, Loading } from "../Infra";

import { CurrentExerciseContext } from "../../contexts/CurrentExerciseContext";
import {
	SelectedOperator,
	UserSelectedOptionsContext,
} from "../../contexts/UserSelectedOptionsContext";
import { mode } from "../../constants/exercises";

interface DefaultProps {
	children?: ReactNode;
}

interface ClientProps extends DefaultProps {
	operator: SelectedOperator;
}

interface FetchProps extends DefaultProps {
	queryName: string;
}

interface GenerateExerciseProps extends DefaultProps {
	generateMode: mode;
}

// Lida com exercícios gerados no Client
const Client = ({ operator, ...props }: ClientProps) => {
	const { addCurrentExercise } = useContext(CurrentExerciseContext);
	const { data, error } = useExerciseClient(operator!);

	useExerciseDataHandler(data, addCurrentExercise);

	if (error?.message) return <Error message={error.message} />;

	return <>{props.children}</>;
};

// Lida com exercícios vindos da API
const Fetch = ({ queryName, ...props }: FetchProps) => {
	const { addCurrentExercise } = useContext(CurrentExerciseContext);
	const { loading, error, data } = useExerciseFetch(queryName!);

	useExerciseDataHandler(data, addCurrentExercise);

	if (error?.message) return <Error message={error.message} />;

	return <>{loading ? <Loading /> : props.children}</>;
};

export const GenerateExercise = ({
	generateMode,
	...props
}: GenerateExerciseProps) => {
	const { userSelectedOptions } = useContext(UserSelectedOptionsContext);

	if (Object.keys(userSelectedOptions).length <= 0) return null;

	if (generateMode === mode.fetch) {
		return (
			<Fetch queryName={userSelectedOptions.exercise!.queryName!}>
				{props.children}
			</Fetch>
		);
	}

	return (
		<Client operator={userSelectedOptions.operator!}>{props.children}</Client>
	);
};
