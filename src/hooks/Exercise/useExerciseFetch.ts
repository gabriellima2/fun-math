import { gql } from "@apollo/client";
import { useEffect, useState } from "react";

import { useLazyFetch } from "../useFetch";

import { ExerciseData, ExerciseResponse } from "../../types/hooks";

interface ExerciseProperties {
	problem: Omit<ExerciseData, "getNextExercise"> & {
		id: string;
	};
}

interface ExercisePropertiesVars {
	number: number;
}

export function useExerciseFetch(queryFieldName: string): ExerciseResponse {
	const GET_EXERCISE_DATA = gql`
		query GetExerciseData($number: Int!) {
			${queryFieldName}(where: { number: $number }) {
				id
				text
				tip
				result
			}
		}
	`;

	const [currentExerciseNumber, setCurrentExerciseNumber] = useState(1);
	const [getExerciseData, { loading, error, data }] = useLazyFetch<
		ExerciseProperties,
		ExercisePropertiesVars
	>(GET_EXERCISE_DATA, { variables: { number: currentExerciseNumber } });

	const getNextExercise = () =>
		setCurrentExerciseNumber((prevState) => prevState + 1);

	useEffect(() => {
		const getData = async () => await getExerciseData();

		getData();
	}, [currentExerciseNumber]);

	return {
		loading,
		error,
		data: {
			...data?.problem,
			getNextExercise,
		},
	};
}
