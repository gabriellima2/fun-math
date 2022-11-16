import { useRouter } from "next/router";
import React from "react";

import type { Component } from "@globalTypes/TGlobals";
import { exercises } from "@mocks/exercises";
import { operators } from "@mocks/operators";

export function ValidateExercisePreferencesFromURL<P extends object>(
	Component: Component<P>
) {
	return function HOC(props: P) {
		const router = useRouter();
		const { type, operator } = router.query;

		const queriesFormatIsValid = () => {
			if (type || !Array.isArray(type)) return true;

			if (!Array.isArray(operator)) return true;

			return false;
		};

		const queriesValuesIsValid = () => {
			const existExerciseType = exercises.search(type as string);

			// Quando não existir o exercicio informado
			if (!existExerciseType) return false;

			// Quando não for informado um operador e o exercicio não exigi um operador
			if (!operator && existExerciseType.id === exercises.type.problem)
				return false;

			const existOperatorType = operators.search(operator as string);

			// Se existe o operador informado e o exercicio exigi um operador
			return (
				!!existOperatorType && existExerciseType.id !== exercises.type.problem
			);
		};

		const preferencesIsValid = () =>
			queriesFormatIsValid() && queriesValuesIsValid();

		if (!preferencesIsValid()) {
			return (
				<main>
					<h1>Página não encontrada</h1>
				</main>
			);
		}

		return <Component {...props} />;
	};
}
