import React, { useContext, ReactNode } from "react";

import {
	useExerciseFetch,
	useExerciseClient,
	useExerciseDataHandler,
} from "../../hooks/Exercise";

import { Error, Loading } from "../Infra";

import { CurrentExerciseContext } from "../../contexts/CurrentExerciseContext";
import { SelectedOperator } from "../../contexts/UserSelectedOptionsContext";

interface Children {
	children?: ReactNode;
}

interface ClientProps extends Children {
	operator: SelectedOperator;
}

interface FetchProps extends Children {
	queryName: string;
}

// Lida com exercícios gerados no Client
const Client = (props: ClientProps) => {
	const { addCurrentExercise } = useContext(CurrentExerciseContext);
	const { data, error } = useExerciseClient(props.operator);

	useExerciseDataHandler(data, addCurrentExercise);

	if (error?.message) return <Error message={error.message} />;

	return <>{props.children}</>;
};

// Lida com exercícios vindos da API
const Fetch = ({ queryName, ...props }: FetchProps) => {
	const { addCurrentExercise } = useContext(CurrentExerciseContext);
	const { loading, error, data } = useExerciseFetch(queryName);

	useExerciseDataHandler(data, addCurrentExercise);

	if (error?.message) return <Error message={error.message} />;

	return <>{loading ? <Loading /> : props.children}</>;
};

export const ExerciseMode = { Client, Fetch };
