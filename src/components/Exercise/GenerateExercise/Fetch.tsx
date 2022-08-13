import { useContext } from "react";

import {
	useExerciseDataHandler,
	useExerciseFetch,
} from "../../../hooks/Exercise";

import { Error, Loading } from "../../Infra";

import {
	DataPersistedInCookies,
	DataPersistedInCookiesProps,
	InjectedPersistedDataProps,
} from "../../../HOC/DataPersistedInCookies";
import { CurrentExerciseContext } from "../../../contexts/CurrentExerciseContext";

import { Children, WithChildren } from "../../../types";

interface FetchProps
	extends InjectedPersistedDataProps,
		Pick<DataPersistedInCookiesProps, "cookies"> {
	queryName: string;
	children?: Children;
}

const Container = ({ children }: WithChildren) => (
	<main className="gradient-background">{children}</main>
);

// Lida com exercícios vindos da API usando dados do exercicio dos cookies.
export const Fetch = DataPersistedInCookies(
	({ injectedProps, ...props }: FetchProps) => {
		const { addCurrentExercise } = useContext(CurrentExerciseContext);
		const { loading, error, data } = useExerciseFetch(
			props.queryName!,
			injectedProps!.currentValueCookies!,
			props.cookies.name
		);

		useExerciseDataHandler(data, addCurrentExercise);

		if (error?.message)
			return (
				<Container>
					<Error message={error.message} />
				</Container>
			);

		return (
			<>
				{loading ? (
					<Container>
						<Loading />
					</Container>
				) : (
					props.children
				)}
			</>
		);
	}
);
