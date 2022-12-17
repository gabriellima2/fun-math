import type { OutputExerciseDTO } from "@dtos/exercise-dto";

import problems from "@mocks/math-problems.json";

export class MathProblemsModel {
	load(index: number): OutputExerciseDTO {
		if (typeof index !== "number") throw new Error("Tipo de dado inválido");

		if (index > problems.length) throw new Error("Posição não encontrada");

		return problems[Math.abs(index)];
	}
}
