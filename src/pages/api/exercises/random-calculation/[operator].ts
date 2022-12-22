import { NextApiResponse } from "next";

import { RandomCalculationController } from "@controllers/random-calculation-controller";
import type {
	RandomCalculationRequestParams,
	RandomCalculationResponse,
} from "@protocols/random-calculation-protocols";

export default function handler(
	req: RandomCalculationRequestParams,
	res: NextApiResponse<RandomCalculationResponse>
) {
	console.log("requisição random");
	if (req.method !== "GET")
		return res
			.status(405)
			.json({ data: null, message: "Método não suportado" });

	const randomCalculationController = new RandomCalculationController();
	return randomCalculationController.execute(req, res);
}
