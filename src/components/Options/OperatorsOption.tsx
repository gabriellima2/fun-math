import Image from "next/image";
import React from "react";

import { useExercisePreferences } from "@contexts/ExercisePreferences";

import { Radio } from "@components/Radio";

import type { IOperator } from "@interfaces/IOperator";

interface OperatorsOptionProps {
	operators: IOperator[];
}

interface OperatorProps
	extends Pick<IOperator, "image" | "displayText" | "id"> {}

const Operator = (props: OperatorProps) => (
	<Radio.Option value={props.id} className="justify-center sm:justify-start">
		<div className="w-7 sm:w-10 h-7 sm:h-10 relative">
			<Image
				src={props.image}
				alt={`Operator de ${props.displayText}`}
				layout="fill"
				objectFit="contain"
			/>
		</div>
		<p className="hidden sm:inline-block">{props.displayText}</p>
	</Radio.Option>
);

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
