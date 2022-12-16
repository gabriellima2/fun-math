import type { NextApiRequest } from "next";

import { OperatorNames } from "@constants";
import type { Exercise } from "@domain/exercise";

export interface RandomCalculationRequestParams extends NextApiRequest {
	body: { operator: OperatorNames };
}

export interface RandomCalculationResponse {
	data: Exercise | null;
	message?: string;
}
