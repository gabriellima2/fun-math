import Image from "next/image";
import React, { useContext } from "react";

import { Radio } from "./Radio";

import { UserSelectedOptionsContext } from "../contexts/UserSelectedOptionsContext";

import { operators } from "../constants";

export const OperatorsList = React.memo(() => {
	const { userSelectedOptions, selectOperator } = useContext(
		UserSelectedOptionsContext
	);

	return (
		<Radio.Group
			label="Tipos de operadores"
			handleChange={selectOperator}
			currentActiveOption={userSelectedOptions.operator?.id || null}
			className="grid grid-cols-[repeat(2,_1fr)] grid-rows-2 gap-2"
		>
			{operators.map((operator) => (
				<Radio.Option value={operator.id} key={operator.id}>
					<>
						<div className="w-8 md:w-12 h-8 md:h-12 relative">
							<Image
								src={operator.image}
								alt={`Operador de ${operator.name}`}
								layout="fill"
							/>
						</div>
						<span className="hidden options__text sm:inline">
							{operator.name}
						</span>
					</>
				</Radio.Option>
			))}
		</Radio.Group>
	);
});
