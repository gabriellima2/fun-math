import Link from "next/link";
import { useContext } from "react";

import { BackButton } from "../components/Buttons";
import OperatorsList from "../components/OperatorsList";
import { UserChoicesContext } from "../contexts/UserChoicesContext";

import { Customized } from "../layouts/Customized";

const Learning = () => {
	const { userChoices, selectExerciseType } = useContext(UserChoicesContext);

	return (
		<Customized>
			<>
				<main className="w-full flex-center--col gap-16 text-center p-2 px-4 mt-28">
					<section
						className={`${
							!userChoices.operatorType && "translate-y-full"
						} transition-all flex-center--col gap-4`}
					>
						<h1 className="w-80 md:w-[390px] text-2xl md:text-4xl font-accent uppercase tracking-wider">
							Selecione o operador que deseja praticar
						</h1>
						<section className="w-fit flex-center--row p-1 md:p-2 rounded-full bg-black-700/90">
							<OperatorsList />
						</section>
					</section>

					<section className={`${!userChoices.operatorType && "hidden"} `}>
						<h1 className="font-accent text-2xl md:text-4xl">
							Tipo de exercício
						</h1>
						<div className="flex-center--col gap-2 mt-4">
							<button onClick={() => selectExerciseType("random")}>
								Cálculos Aleatórios
							</button>
							<button onClick={() => selectExerciseType("problem")}>
								Situações-Problema
							</button>
						</div>
					</section>

					{userChoices.exerciseType && userChoices.operatorType && (
						<Link href="/exercises">
							<a>Praticar</a>
						</Link>
					)}
				</main>

				<span className="fixed bottom-6 left-8">
					<BackButton />
				</span>
			</>
		</Customized>
	);
};

export default Learning;
