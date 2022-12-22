import { NextApiResponse } from "next";

import { RandomCalculationModel } from "@models/random-calculation-model";
import type {
	RandomCalculationRequestParams,
	RandomCalculationResponse,
} from "@protocols/random-calculation-protocols";

export class RandomCalculationController {
	private model: RandomCalculationModel;

	constructor() {
		this.model = new RandomCalculationModel();
	}

	public execute(
		req: RandomCalculationRequestParams,
		res: NextApiResponse<RandomCalculationResponse>
	) {
		try {
			const exercise = this.model.load(req.query.operator);
			res.status(200).json({ data: exercise });
		} catch (err) {
			res.status(500).json({ data: null, message: (err as Error).message });
		}
	}
}
