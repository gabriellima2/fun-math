import type { TNumbers } from "@globalTypes/TNumbers";

export interface ExerciseModel {
	id?: string | undefined;
	text: string;
	tip?: string | undefined;
	result: string;
	type: TNumbers;
	getNextExercise: () => void;
}
