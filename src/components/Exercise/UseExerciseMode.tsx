import React, { useContext, useEffect, useMemo, ReactNode } from "react";

import { useExerciseFetch, useExerciseClient } from "../../hooks/Exercise";

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

// Gerar exercícios no Client
const Client = (props: ClientProps) => {
	const { addCurrentExercise } = useContext(CurrentExerciseContext);
	const { data, error } = useExerciseClient(props.operator);

	const dataMemoized = useMemo(() => data, [data?.result]);

	// Usa-se o Objeto Memoizado para evitar loops, assim adicionando os dados atualizados.
	useEffect(() => {
		if (!dataMemoized) return;

		addCurrentExercise(dataMemoized);
	}, [dataMemoized]);

	if (error?.message) return <Error message={error.message} />;

	return <>{props.children}</>;
};

// Pegar exercícios de API
const Fetch = ({ queryName, ...props }: FetchProps) => {
	const { addCurrentExercise } = useContext(CurrentExerciseContext);
	const { loading, error, data } = useExerciseFetch({ queryName });

	const dataMemoized = useMemo(() => data, [data?.result]);

	useEffect(() => {
		if (!dataMemoized) return;

		addCurrentExercise(dataMemoized);
	}, [dataMemoized]);

	if (error?.message) return <Error message={error.message} />;

	return <>{loading ? <Loading /> : props.children}</>;
};

export const UseExerciseMode = { Client, Fetch };
