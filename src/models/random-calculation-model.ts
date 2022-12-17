import type { OutputExerciseDTO } from "@dtos/exercise-dto";

import { OperatorNames } from "@constants";
import { calculationGenerator } from "@utils/calculation-generator";

export class RandomCalculationModel {
	public load(operator: OperatorNames): OutputExerciseDTO {
		if (typeof operator !== "string")
			throw new Error("Tipo parâmetro 'operator' inválido");

		const operatorExists = OperatorNames[operator];
		if (!operatorExists) throw new Error("Operador inexistente");

		const calculations = {
			[OperatorNames.addition]: () =>
				calculationGenerator.addition({ max: 100, min: 1 }),
			[OperatorNames.subtraction]: () =>
				calculationGenerator.subtraction({ max: 100, min: 2 }),
			[OperatorNames.division]: () =>
				calculationGenerator.division({ max: 12, min: 2 }),
			[OperatorNames.multiply]: () =>
				calculationGenerator.multiply({ max: 50, min: 9 }),
		};

		const calculation = calculations[operator]();

		return {
			text: `Qual o resultado de ${calculation.firstNumber} ${calculation.operatorSymbol} ${calculation.secondNumber}`,
			result: calculation.result,
			tip: undefined,
		};
	}
}
