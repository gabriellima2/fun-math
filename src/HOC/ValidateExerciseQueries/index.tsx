import { useRouter } from "next/router";
import Error from "next/error";

import { ExerciseNames } from "@constants";
import { exercises } from "@mocks/exercises";
import { operators } from "@mocks/operators";
import { getById } from "@utils/get-by-id";

import type { Component } from "@global-types/TGlobals";

export interface ValidateExerciseQueriesInjectedProps {
	injectedProps: {
		type?: string;
		operator?: string;
	};
}

export function ValidateExerciseQueries<
	P extends ValidateExerciseQueriesInjectedProps
>(Component: Component<P>) {
	return function HOC(props: P) {
		const router = useRouter();
		const { type, operator } = router.query;

		const queriesFormatIsValid = () => {
			if (type && !Array.isArray(type)) return true;

			if (!Array.isArray(operator)) return true;

			return false;
		};

		const queriesValuesIsValid = () => {
			const haveExerciseType = getById(exercises, type as string);

			// Quando não existir o exercicio informado
			if (!haveExerciseType) return false;

			// Quando não for informado um operador e o exercicio não exigi um operador
			if (!operator && haveExerciseType.id === ExerciseNames.problem)
				return true;

			const haveOperatorType = getById(operators, operator as string);

			// Se existe o operador informado e o exercicio exigi um operador
			return !!haveOperatorType && haveExerciseType.needOperator;
		};

		const preferencesIsValid = () =>
			queriesFormatIsValid() && queriesValuesIsValid();

		if (!preferencesIsValid()) {
			return (
				<Error statusCode={404} title="Tipo de exercício não encontrado" />
			);
		}

		return <Component {...(props as P)} injectedProps={{ type, operator }} />;
	};
}
