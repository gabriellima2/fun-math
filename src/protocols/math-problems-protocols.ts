import { OutputExerciseDTO } from "@dtos/exercise-dto";
import { NextApiRequest } from "next";

export interface MathProblemsRequest extends NextApiRequest {
	body: { position?: number };
}

export interface MathProblemsResponse {
	data: OutputExerciseDTO | null;
	message?: string;
}
