import React from "react";

import { operators } from "../../contents";

interface OperatorListProps {
	selectThisOperator: (operator: string) => void;
}

const OperatorsList = (props: OperatorListProps) => {
	return (
		<ul className="flex gap-4 flex-wrap">
			{operators.map((operator) => (
				<ol>
					<button
						type="button"
						onClick={() => props.selectThisOperator(operator.id)}
						className="bg-main p-2 px-4 rounded-full text-2xl font-bold"
					>
						{operator.symbol}
						<span className="hidden">Operador de {operator.name}</span>
					</button>
				</ol>
			))}
		</ul>
	);
};

export default React.memo(OperatorsList);
