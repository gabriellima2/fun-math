import { useRouter } from "next/router";
import Error from "next/error";

import type { Component } from "@globalTypes/TGlobals";
import { exercises } from "@mocks/exercises";
import { operators } from "@mocks/operators";

export interface ValidateQueriesFromURLInjectedProps {
	injectedProps: {
		type?: string;
		operator?: string;
	};
}

export function ValidateQueriesFromURL<
	P extends ValidateQueriesFromURLInjectedProps
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
			const haveExerciseType = exercises.search(type as string);

			// Quando não existir o exercicio informado
			if (!haveExerciseType) return false;

			// Quando não for informado um operador e o exercicio não exigi um operador
			if (!operator && haveExerciseType.id === exercises.type.problem)
				return true;

			const haveOperatorType = operators.search(operator as string);

			// Se existe o operador informado e o exercicio exigi um operador
			return (
				!!haveOperatorType && haveExerciseType.id !== exercises.type.problem
			);
		};

		const preferencesIsValid = () =>
			queriesFormatIsValid() && queriesValuesIsValid();

		if (!preferencesIsValid()) {
			return <Error statusCode={404} />;
		}

		return <Component {...(props as P)} injectedProps={{ type, operator }} />;
	};
}
