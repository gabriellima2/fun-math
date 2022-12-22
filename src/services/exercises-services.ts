import { OutputExerciseDTO } from "@dtos/exercise-dto";

export interface ExerciseResponse {
	data: OutputExerciseDTO | null;
	message?: string;
}

export const exercisesServices = {
	getRandomCalculation: async (operator: string) => {
		const response = await fetch(
			`/api/exercises/random-calculation/${operator}`,
			{ method: "GET" }
		);
		const data: ExerciseResponse = await response.json();

		return data;
	},
	getMathProblems: async (position: string) => {
		const response = await fetch(`/api/exercises/math-problems/${position}`, {
			method: "GET",
		});
		const data: ExerciseResponse = await response.json();

		return data;
	},
};
