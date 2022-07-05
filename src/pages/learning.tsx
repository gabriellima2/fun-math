import { useState } from "react";

import { BackButton } from "../components/Buttons";
import { OperatorsList, OperatorText } from "../components/Operators";

import { Customized } from "../layouts/Customized";

const Learning = () => {
	const [selectedOperator, setSelectedOperator] = useState<null | string>(null);

	return (
		<Customized>
			<>
				<div className="flex-center--col gap-10 p-2 mt-6">
					<main
						id="select-operator"
						className="w-full flex-center--col gap-4 text-center p-2 px-4"
					>
						<h1 className="text-2xl font-accent uppercase tracking-wide">
							Selecione o operador
						</h1>
						<section className="w-fit flex-center--row p-1 rounded-3xl bg-black-500/90">
							<OperatorsList
								selectThisOperator={(operator: string) =>
									setSelectedOperator(operator)
								}
							/>
						</section>
					</main>

					<section aria-describedby="select-operator">
						{selectedOperator ? (
							<OperatorText selectedOperator={selectedOperator} />
						) : (
							"Selecione o operador"
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
