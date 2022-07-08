import Image from "next/image";
import React, { useContext } from "react";

import { UserChoicesContext } from "../contexts/UserChoicesContext";

import { operators } from "../constants";

export const OperatorsList = React.memo(() => {
	const { userChoices, selectOperatorType } = useContext(UserChoicesContext);

	return (
		<ul className="grid grid-cols-[repeat(2,_1fr)] grid-rows-2 gap-2">
			{operators.map((operator) => (
				<li key={operator.id}>
					<button
						type="button"
						title={`Escolher operador de ${operator.name}`}
						disabled={userChoices.operatorType == operator.id}
						aria-pressed={userChoices.operatorType == operator.id}
						onClick={() => selectOperatorType(operator.id)}
						className="options w-full justify-center sm:justify-start "
					>
						<div className="w-8 md:w-12 h-8 md:h-12 relative">
							<Image src={operator.symbol} layout="fill" />
						</div>
						<span className="hidden options__text sm:inline">
							{operator.name}
						</span>
					</button>
				</li>
			))}
		</ul>
	);
});
