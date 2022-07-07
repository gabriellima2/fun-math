import { useContext } from "react";

import { BackButton } from "../components/Buttons";
import { OperatorsList, OperatorsText } from "../components/Operators";

import { Customized } from "../layouts/Customized";

import { SelectedOperatorContext } from "../contexts/SelectedOperatorContext";

const Learning = () => {
	const { currentOperator } = useContext(SelectedOperatorContext);

	return (
		<Customized>
			<>
				<div className="flex-center--col gap-10 p-2">
					<main
						id="select-operator"
						className={`${
							!currentOperator && "translate-y-full"
						} transition-all w-full flex-center--col gap-4 text-center p-2 px-4 mt-6`}
					>
						<h1 className="w-80 md:w-[390px] text-2xl md:text-4xl font-accent uppercase tracking-wider">
							Selecione o operador que deseja praticar
						</h1>
						<section className="w-fit flex-center--row p-1 md:p-2 rounded-full bg-black-700/90">
							<OperatorsList />
						</section>
					</main>

					<section>
						{currentOperator && (
							<OperatorsText selectedOperatorId={currentOperator} />
						)}
					</section>
				</div>

				<span className="absolute bottom-6 left-8">
					<BackButton />
				</span>
			</>
		</Customized>
	);
};

export default Learning;
