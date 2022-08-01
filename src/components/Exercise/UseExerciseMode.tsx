import React, { useContext, useEffect } from "react";
import { useQuery, gql } from "@apollo/client";

import { CurrentExerciseContext } from "../../contexts/CurrentExerciseContext";
import { useExerciseClient } from "../../hooks/Exercise/useExerciseClient";

import { Operators, WithChildren } from "../../types";

interface ClientProps extends WithChildren {
	operator: Operators;
}

interface FetchProps extends WithChildren {
	query: ReturnType<typeof gql>;
}

const Client = (props: ClientProps) => {
	const { addNewCurrentExercise } = useContext(CurrentExerciseContext);
	const exerciseClient = useExerciseClient(props.operator);

	useEffect(() => {
		addNewCurrentExercise(exerciseClient);
	}, []);

	return <>{props.children}</>;
};

const Fetch = (props: FetchProps) => {
	const { addNewCurrentExercise } = useContext(CurrentExerciseContext);
	const { loading, error, data } = useQuery(props.query);

	useEffect(() => addNewCurrentExercise(data), [data]);

	if (error) return <h1>Error</h1>;

	return <>{loading ? <h1>Loading</h1> : props.children}</>;
};

export const UseExerciseMode = { Client, Fetch };
