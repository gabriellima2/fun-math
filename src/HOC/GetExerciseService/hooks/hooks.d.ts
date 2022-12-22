import type { ExerciseResponse } from "@services/exercises-services";

export interface HookExerciseReturn {
	handle: (param?: any) => Promise<ExerciseResponse>;
}
