import React, { useContext, useEffect, useMemo, ReactNode } from "react";
import { useQuery, gql } from "@apollo/client";

import { CurrentExerciseContext } from "../../contexts/CurrentExerciseContext";
import { useExerciseClient } from "../../hooks/Exercise/useExerciseClient";

import { OperatorType } from "../../types";

interface Children {
	children?: ReactNode;
}

interface ClientProps extends Children {
	operator: OperatorType;
}

interface FetchProps extends Children {
	query: ReturnType<typeof gql>;
}

const Client = (props: ClientProps) => {
	const { addCurrentExercise } = useContext(CurrentExerciseContext);
	const newExercise = useExerciseClient(props.operator);

	const newExerciseMemoized = useMemo(() => newExercise, [newExercise.result]);

	// Usa-se o Objeto Memoizado para evitar loops, mas com dados atualizados.
	useEffect(() => {
		addCurrentExercise(newExerciseMemoized);
	}, [newExerciseMemoized]);

	return <>{props.children}</>;
};

const Fetch = (props: FetchProps) => {
	const { addCurrentExercise } = useContext(CurrentExerciseContext);
	const { loading, error, data } = useQuery(props.query);

	useEffect(() => addCurrentExercise(data), []);

	if (error) return <h1>Error</h1>;

	return <>{loading ? <h1>Loading</h1> : props.children}</>;
};

export const UseExerciseMode = { Client, Fetch };
