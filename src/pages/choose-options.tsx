import { useContext } from "react";
import { useRouter } from "next/router";
import { BsArrowRightShort, BsFillExclamationCircleFill } from "react-icons/bs";

import { OperatorsList } from "../components/OperatorsList";
import { ExerciseTypes } from "../components/ExerciseTypes";
import { BackButton, MainButton } from "../components/Buttons";
import { Icon } from "../components/Icon";

import { Customized } from "../layouts/Customized";

import { UserSelectedOptionsContext } from "../contexts/UserSelectedOptionsContext";
import { exercises } from "../constants";

const ChooseOptions = () => {
	const router = useRouter();
	const { userSelectedOptions, userSelectedOptionsAreNotValid } = useContext(
		UserSelectedOptionsContext
	);

	const handleSubmit = () => {
		if (userSelectedOptionsAreNotValid()) return;

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
						<h1 className="text-xl md:text-3xl mb-4">
							Selecione as opções para praticar
						</h1>
						<fieldset className="container bg-black-600/80">
							<h2 className="subtitle">Tipo de exercícios</h2>
							<ExerciseTypes />
						</fieldset>

						<fieldset aria-live="polite" className="container bg-black-600/80">
							{userSelectedOptions.exercise !== exercises.type.problem ? (
								<>
									<h2 className="subtitle">Tipo de operador</h2>
									<OperatorsList />
								</>
							) : (
								<h2 className="subtitle mt-5 flex-center--row gap-4">
									<Icon
										label="Icone de aviso"
										element={BsFillExclamationCircleFill}
										className="text-xl"
									/>
									Esse tipo de exercício usa operadores aleatórios
								</h2>
							)}
						</fieldset>

						<section className="container flex justify-between">
							<BackButton />

							<MainButton
								type="submit"
								title="Começar"
								disabled={userSelectedOptionsAreNotValid()}
								className="p-2 sm:p-4 md:px-5 rounded-2xl text-base capitalize"
								icon={{
									element: BsArrowRightShort,
									label:
										"Icone de seta para direita, indica a inicialização da prática",
									className: "text-3xl sm:text-2xl",
								}}
							>
								<span className="hidden sm:block">começar</span>
							</MainButton>
						</section>
					</form>
				</main>
			</>
		</Customized>
	);
};

export default ChooseOptions;
