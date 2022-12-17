import { NextApiResponse } from "next";

import { RandomCalculationModel } from "@models/random-calculation-model";
import type {
	RandomCalculationRequestParams,
	RandomCalculationResponse,
} from "@protocols/random-calculation-protocols";

import { OperatorNames } from "@constants";

export class RandomCalculationController {
	private model: RandomCalculationModel;

	constructor() {
		this.model = new RandomCalculationModel();
	}

	public execute(
		req: RandomCalculationRequestParams,
		res: NextApiResponse<RandomCalculationResponse>
	) {
		const { operator } = req.body;

		try {
			const operatorExists = OperatorNames[operator];
			if (!operatorExists) throw new Error("Campo inválido ou vazio!");

			const exercise = this.model.load(operator);
			res.status(200).json({ data: exercise });
		} catch (err) {
			res.status(500).json({ data: null, message: (err as Error).message });
		}
	}
}
