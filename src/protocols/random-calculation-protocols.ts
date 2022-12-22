import type { NextApiRequest } from "next";

import { OperatorNames } from "@constants";
import type { OutputExerciseDTO } from "@dtos/exercise-dto";

export interface RandomCalculationRequestParams extends NextApiRequest {
	query: { operator: OperatorNames };
}

export interface RandomCalculationResponse {
	data: OutputExerciseDTO | null;
	message?: string;
}
