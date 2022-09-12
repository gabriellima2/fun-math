import { useContext } from "react";

import {
	useExerciseClient,
	useExerciseDataHandler,
} from "../../../hooks/Exercise";

import { Error, Loading } from "../../Infra";

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
	const { data, error, loading } = useExerciseClient(operator);

	useExerciseDataHandler(data, addCurrentExercise);

	if (error && error.message)
		return (
			<Error.FullScreen
				withLogo={true}
				message={error.message}
				className="font-semibold text-xl md:text-2xl text-center"
			/>
		);

	return <>{loading ? <Loading.FullScreen /> : props.children}</>;
};
