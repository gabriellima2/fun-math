import { useContext } from "react";
import { BsArrowRightShort } from "react-icons/bs";

import { MainLink } from "../components/Links";
import { BackButton } from "../components/Buttons";
import { OperatorsList } from "../components/OperatorsList";
import { ExerciseTypes } from "../components/ExerciseTypes";

import { Customized } from "../layouts/Customized";

import { UserChoicesContext } from "../contexts/UserChoicesContext";

const ChooseOptions = () => {
	const { userChoices } = useContext(UserChoicesContext);

	return (
		<Customized>
			<>
				<main className="w-full flex-center--col gap-6 text-center p-2 px-4 mt-8">
					<h1 className="font-accent text-xl md:text-3xl mb-4">
						Selecione as opções para praticar
					</h1>
					<section className="container">
						<h2 className="subtitle">Tipo de operador</h2>
						<OperatorsList />
					</section>

					<section className="container">
						<h2 className="subtitle">Tipo de exercícios</h2>
						<ExerciseTypes />
					</section>

					<MainLink
						href="/exercises"
						icon={BsArrowRightShort}
						isDisabled={!userChoices.exerciseType || !userChoices.operatorType}
					>
						começar
					</MainLink>
				</main>

				<span className="fixed bottom-6 left-8">
					<BackButton />
				</span>
			</>
		</Customized>
	);
};

export default ChooseOptions;