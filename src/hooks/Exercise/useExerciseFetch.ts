import { gql } from "@apollo/client";
import { useEffect, useState } from "react";

import { useLazyFetch } from "../useFetch";

import { ExerciseMode, ExerciseModeReturn } from "../../types/hooks";

interface ExerciseData {
	problem: Omit<ExerciseMode, "getNextExercise"> & {
		id: string;
	};
}

interface ExerciseDataVars {
	number: number;
}

interface UseExerciseFetchProps {
	queryName: string;
}

export function useExerciseFetch({
	queryName,
}: UseExerciseFetchProps): ExerciseModeReturn {
	const GET_EXERCISE_DATA = gql`
		query GetExerciseData($number: Int!) {
			${queryName}(where: { number: $number }) {
				id
				text
				tip
				result
			}
		}
	`;

	const [currentNumber, setCurrentNumber] = useState(1);
	const [getNextExerciseData, { loading, error, data }] = useLazyFetch<
		ExerciseData,
		ExerciseDataVars
	>(GET_EXERCISE_DATA, { variables: { number: currentNumber } });

	const getNextExercise = () => setCurrentNumber((prevState) => prevState + 1);

	useEffect(() => {
		const getData = async () => await getNextExerciseData();

		getData();
	}, [currentNumber]);

	return { loading, error, data: { ...data?.problem, getNextExercise } };
}
