import { gql } from "@apollo/client";
import { useEffect, useState } from "react";
import * as nookies from "nookies";

import { useLazyFetch } from "../useFetch";

import { ExerciseDataResponse } from "../../types/hooks";

interface ExerciseProperties {
	problem: Omit<ExerciseDataResponse, "getNextExercise">;
}

interface ExercisePropertiesVars {
	number: number;
}

export function useExerciseFetch(
	queryFieldName: string,
	cookieName: string,
	exerciseID: string
) {
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

	const [currentExerciseNumber, setCurrentExerciseNumber] = useState(
		Number(exerciseID) || 1
	);
	const [getExerciseData, { loading, error, data }] = useLazyFetch<
		ExerciseProperties,
		ExercisePropertiesVars
	>(GET_EXERCISE_DATA, {
		variables: { number: currentExerciseNumber },
	});

	const getNextExercise = () =>
		setCurrentExerciseNumber((prevState) => prevState + 1);

	useEffect(() => {
		const getData = async () => await getExerciseData();

		getData();

		nookies.destroyCookie(null, cookieName);
		nookies.setCookie(null, cookieName, currentExerciseNumber.toString(), {
			maxAge: 60 * 120, // 2 Horas
			path: "/",
			sameSite: "strict",
		});
	}, [currentExerciseNumber]);

	if (data && data.problem === null && !error) {
		nookies.destroyCookie(null, cookieName);

		return {
			loading: false,
			error: {
				message:
					"Chegou ao final, parabéns!! Em breve teremos mais exercícios...",
			},
			data: undefined,
		};
	}

	if (data) {
		return {
			loading,
			error,
			data: {
				...data.problem,
				getNextExercise,
			},
		};
	}

	return {
		loading,
		error,
		data,
	};
}
