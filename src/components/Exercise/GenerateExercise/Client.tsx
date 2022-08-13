import { useContext } from "react";

import {
	useExerciseClient,
	useExerciseDataHandler,
} from "../../../hooks/Exercise";

import { Error } from "../../Infra";

import { CurrentExerciseContext } from "../../../contexts/CurrentExerciseContext";
import { SelectedOperator } from "../../../contexts/UserSelectedOptionsContext";

import { Children } from "../../../types";

interface ClientProps {
	operator: SelectedOperator;
	children?: Children;
}

// Lida com exercícios gerados no Client
export const Client = ({ operator, ...props }: ClientProps) => {
	const { addCurrentExercise } = useContext(CurrentExerciseContext);
	const { data, error } = useExerciseClient(operator!);

	useExerciseDataHandler(data, addCurrentExercise);

	if (error?.message) return <Error message={error.message} />;

	return <>{props.children}</>;
};
