import Image from "next/image";
import React, { useContext } from "react";

import { UserChoicesContext } from "../contexts/UserChoicesContext";

import { operators } from "../contents";

const OperatorsList = () => {
	const { userChoices, selectOperatorType } = useContext(UserChoicesContext);

	return (
		<ul className="flex gap-3 flex-wrap">
			{operators.map((operator) => (
				<ol>
					<button
						type="button"
						disabled={userChoices.operatorType == operator.id}
						onClick={() => selectOperatorType(operator.id)}
						className="w-12 md:w-20 h-12 md:h-20 flex-center--row disabled:bg-main rounded-full text-2xl md:text-5xl font-bold"
					>
						<div className="w-7 md:w-12 h-7 md:h-12 relative">
							<Image src={operator.symbol} layout="fill" />
						</div>
						<span className="hidden">Operador de {operator.name}</span>
					</button>
				</ol>
			))}
		</ul>
	);
};

export default React.memo(OperatorsList);
