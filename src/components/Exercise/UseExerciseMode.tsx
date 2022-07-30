import React from "react";
import { useQuery, gql } from "@apollo/client";

import { ExerciseContent } from ".";

import { useExerciseClient } from "../../hooks/Exercise/useExerciseClient";

import { Operators } from "../../types";

interface ClientProps {
	operator: Operators;
}

interface FetchProps {
	query: ReturnType<typeof gql>;
}

const Client = (props: ClientProps) => {
	const exerciseClient = useExerciseClient(props.operator);

	return <ExerciseContent {...exerciseClient} />;
};

const Fetch = (props: FetchProps) => {
	const { loading, error, data } = useQuery(props.query);

	if (error) return <h1>Error</h1>;

	return <>{loading ? <h1>Loading</h1> : <ExerciseContent {...data} />}</>;
};

export const UseExerciseMode = { Client, Fetch };
