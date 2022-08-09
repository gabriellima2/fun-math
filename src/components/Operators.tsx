import Image from "next/image";
import React, { useContext } from "react";

import { Radio } from "./Infra/Accessibility/Radio";

import { UserSelectedOptionsContext } from "../contexts/UserSelectedOptionsContext";
import { OperatorType } from "../types";
import { operators } from "../constants";

interface ItemProps {
	operator: OperatorType;
}

const Item = ({ operator, ...props }: ItemProps) => (
	<Radio.Option value={operator.id}>
		<>
			<div className={"w-8 md:w-12 h-8 md:h-12 relative"}>
				<Image
					src={operator.image}
					alt={`Operador de ${operator.name}`}
					layout="fill"
				/>
			</div>
			<span className="uppercase hidden options__text sm:inline">
				{operator.name}
			</span>
		</>
	</Radio.Option>
);

export const Operators = React.memo(() => {
	const { userSelectedOptions, selectOperator } = useContext(
		UserSelectedOptionsContext
	);

	return (
		<Radio.Group
			label="Lista de operadores"
			handleChange={selectOperator}
			currentActiveOption={userSelectedOptions.operator?.id || null}
			className="grid grid-cols-[repeat(2,_1fr)] grid-rows-2 gap-2"
		>
			{operators.data.map((operator) => (
				<Item operator={operator} key={operator.id} />
			))}
		</Radio.Group>
	);
});
