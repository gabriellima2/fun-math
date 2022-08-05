import { operators } from "../constants";

export function getOperatorData(operatorID: string) {
	const [operator] = operators.data.filter(
		(operator) => operator.id === operatorID
	);

	return operator;
}
