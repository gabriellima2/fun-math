import React from "react";

import { useExercisePreferences } from "@contexts/ExercisePreferences";

import { Radio } from "@components/Radio";
import { Operator } from "./components/Operator";

import type { OperatorModel } from "@models/operator-model";

interface OperatorsOptionProps {
	operators: OperatorModel[];
}

export const OperatorsOption = ({ operators }: OperatorsOptionProps) => {
	const { exercisePreferences, setOperator } = useExercisePreferences();

	return (
		<Radio.Group
			label="Tipo de operador:"
			value={exercisePreferences.operator?.id}
			onChange={setOperator}
		>
			<div className="grid grid-cols-2 grid-rows-2 gap-3 sm:gap-4">
				{operators.map((operator) => (
					<Operator {...operator} key={operator.id} />
				))}
			</div>
		</Radio.Group>
	);
};
