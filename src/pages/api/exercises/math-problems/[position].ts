import { NextApiResponse } from "next";

import { MathProblemsController } from "@controllers/math-problems-controller";
import type {
	MathProblemsRequest,
	MathProblemsResponse,
} from "@protocols/math-problems-protocols";

export default function handler(
	req: MathProblemsRequest,
	res: NextApiResponse<MathProblemsResponse>
) {
	if (req.method !== "GET")
		return res
			.status(405)
			.json({ data: null, message: "Método não suportado" });

	const mathProblemsController = new MathProblemsController();
	return mathProblemsController.execute(req, res);
}
