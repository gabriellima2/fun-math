import { useContext } from "react";
import { useRouter } from "next/router";
import { BsArrowRightShort } from "react-icons/bs";

import { OperatorsList } from "../components/OperatorsList";
import { ExerciseTypes } from "../components/ExerciseTypes";
import { BackButton, MainButton } from "../components/Buttons";

import { Customized } from "../layouts/Customized";

import { UserChoicesContext } from "../contexts/UserChoicesContext";

const ChooseOptions = () => {
	const router = useRouter();
	const { userChoices } = useContext(UserChoicesContext);

	const handleSubmit = () => {
		if (!userChoices.exerciseType || !userChoices.operatorType) return;

		router.push("/exercises");
	};

	return (
		<Customized>
			<>
				<main className="p-2 px-4 mt-8">
					<form
						onSubmit={(e) => {
							e.preventDefault();
							handleSubmit();
						}}
						className="w-full flex-center--col gap-6 text-center"
					>
						<h1 className="font-accent text-xl md:text-3xl mb-4">
							Selecione as opções para praticar
						</h1>
						<fieldset className="container">
							<h2 className="subtitle">Tipo de operador</h2>
							<OperatorsList />
						</fieldset>

						<fieldset className="container">
							<h2 className="subtitle">Tipo de exercícios</h2>
							<ExerciseTypes />
						</fieldset>

						<MainButton
							type="submit"
							disabled={!userChoices.exerciseType || !userChoices.operatorType}
							icon={{ element: BsArrowRightShort, label: "Seta para direita" }}
						>
							começar
						</MainButton>
					</form>
				</main>

				<span className="fixed bottom-6 left-8">
					<BackButton />
				</span>
			</>
		</Customized>
	);
};

export default ChooseOptions;
