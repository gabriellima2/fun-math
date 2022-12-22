import { OutputExerciseDTO } from "@dtos/exercise-dto";
import { NextApiRequest } from "next";

export interface MathProblemsRequest extends NextApiRequest {
	query: { position: string };
}

export interface MathProblemsResponse {
	data: OutputExerciseDTO | null;
	message?: string;
}
