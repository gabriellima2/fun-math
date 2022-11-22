import type { ApolloError } from "@apollo/client";
import type { TNumbers } from "@globalTypes/TNumbers";
import type { IError } from "@interfaces/IError";

export interface IExercise {
	id: type;
	displayText: string;
	icon: IconType;
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

export interface IExerciseResponse {
	loading?: boolean;
	error?: ApolloError | IError;
	data?: IExercisePropertiesResponse;
}

export interface IRenderExercise {
	type: string;
	Render: () => JSX.Element;
}
