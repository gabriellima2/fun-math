import type { OutputExerciseDTO } from "@dtos/exercise-dto";

import problems from "@mocks/math-problems.json";

export class MathProblemsModel {
	load(position: string): OutputExerciseDTO {
		const numberPosition = Number(position);

		if (isNaN(Number(numberPosition))) throw new Error("Tipo de dado inválido");

		if (numberPosition > problems.length)
			throw new Error("Posição não encontrada");

		return problems[Math.abs(numberPosition)];
	}
}
