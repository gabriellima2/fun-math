import Image from "next/image";
import React, { useContext } from "react";

import { Radio } from "./Radio";

import { UserChoicesContext } from "../contexts/UserChoicesContext";

import { operators } from "../constants";

export const OperatorsList = React.memo(() => {
	const { userChoices, selectOperatorType } = useContext(UserChoicesContext);

	return (
		<Radio.Group
			label="Tipos de operadores"
			handleChange={selectOperatorType}
			currentActiveOption={userChoices.operatorType}
			className="grid grid-cols-[repeat(2,_1fr)] grid-rows-2 gap-2"
		>
			{operators.map((operator) => (
				<Radio.Option value={operator.id} key={operator.id}>
					<>
						<div className="w-8 md:w-12 h-8 md:h-12 relative">
							<Image src={operator.symbol} layout="fill" />
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
