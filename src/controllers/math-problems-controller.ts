import { NextApiResponse } from "next";

import { MathProblemsModel } from "@models/math-problems-model";
import type {
	MathProblemsRequest,
	MathProblemsResponse,
} from "@protocols/math-problems-protocols";

export class MathProblemsController {
	private model: MathProblemsModel;

	constructor() {
		this.model = new MathProblemsModel();
	}

	public execute(
		req: MathProblemsRequest,
		res: NextApiResponse<MathProblemsResponse>
	) {
		try {
			const exercise = this.model.load(req.query.position);
			res.status(200).json({ data: exercise });
		} catch (err) {
			res.status(500).json({ data: null, message: (err as Error).message });
		}
	}
}
