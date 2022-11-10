import type { ApolloError } from "@apollo/client";
import type { TNumbers } from "@types/TNumbers";

export interface IExercise {
	id: type;
	mode: mode;
	name: string;
	icon: IconType;
	queryName?: string;
}

export interface IExerciseProperties {
	id?: string | undefined;
	text: string;
	tip?: string | undefined;
	result: string;
	type: TNumbers;
	getNextExercise: () => void;
}

export interface IExercisePropertiesResponse
	extends Omit<IExerciseProperties, "type"> {}

export interface ExerciseResponse {
	loading?: boolean;
	error?: ApolloError | Error;
	data?: IExercisePropertiesResponse;
}
