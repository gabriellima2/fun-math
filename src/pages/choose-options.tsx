import { useContext } from "react";
import { useRouter } from "next/router";
import { BsArrowRightShort } from "react-icons/bs";

import { OperatorsList } from "../components/OperatorsList";
import { ExerciseTypes } from "../components/ExerciseTypes";
import { BackButton, MainButton } from "../components/Buttons";

import { Customized } from "../layouts/Customized";

import { UserChoicesContext } from "../contexts/UserChoicesContext";
import { exerciseTypesID } from "../constants";

const ChooseOptions = () => {
	const router = useRouter();
	const { userChoices } = useContext(UserChoicesContext);

	const isDisabled = () => {
		if (userChoices.exerciseType) {
			if (userChoices.exerciseType === exerciseTypesID.problem) {
				return false;
			}

			if (userChoices.operatorType) {
				return false;
			}
		}

		return true;
	};

	const handleSubmit = () => {
		if (isDisabled()) return;

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
							<h2 className="subtitle">Tipo de exercícios</h2>
							<ExerciseTypes />
						</fieldset>

						<fieldset aria-live="polite" className="container">
							{userChoices.exerciseType !== exerciseTypesID.problem ? (
								<>
									<h2 className="subtitle">Tipo de operador</h2>
									<OperatorsList />
								</>
							) : (
								<h2 className="subtitle mt-5">
									OBS: Esse tipo de exercício usa operadores aleatórios
								</h2>
							)}
						</fieldset>

						<MainButton
							type="submit"
							disabled={isDisabled()}
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
