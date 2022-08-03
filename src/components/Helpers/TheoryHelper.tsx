import Image from "next/image";
import { useState } from "react";

import { Operators } from "../Operators";
import { Radio } from "../Radio";

import { operators } from "../../constants";

const ButtonText = () => <>Sobre o operador</>;

const Content = () => {
	const [currentOperator, setCurrentOperator] = useState("");

	const changeCurrentOperator = (operator: string) =>
		setCurrentOperator(operator);

	return (
		<>
			<Operators.Container
				handleChange={changeCurrentOperator}
				currentActiveOption={currentOperator}
				className="flex gap-2 overflow-x-scroll pb-4"
			>
				<Operators.List
					showOperatorName={false}
					className="w-fit"
					sizeImage="w-6 h-6"
				/>
			</Operators.Container>
			{currentOperator && <p>Texto do operador de {currentOperator}</p>}
		</>
	);
};

export const TheoryHelper = { ButtonText, Content };
