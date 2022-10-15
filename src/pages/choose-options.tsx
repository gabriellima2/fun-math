import { useContext } from "react";
import { useRouter } from "next/router";
import { BsArrowRightShort, BsFillExclamationCircleFill } from "react-icons/bs";

import { BackButton, MainButton } from "@components/Buttons";
import { Operators } from "@components/Operators";
import { Exercises } from "@components/Exercise";
import { Icon } from "@components/Icon";

import { Customized } from "../layouts/Customized";

import { UserSelectedOptionsContext } from "@contexts/UserSelectedOptionsContext";
import { exercises } from "../mocks";

const ChooseOptions = () => {
	const router = useRouter();
	const {
		userSelectedOptions,
		selectOperator,
		userSelectedOptionsAreNotValid,
	} = useContext(UserSelectedOptionsContext);

	const handleSubmit = () => {
		if (userSelectedOptionsAreNotValid()) return;

		router.push({
			pathname: "/exercises",
			query: { id: userSelectedOptions.exercise?.id },
		});
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
						<h1 className="text-xl md:text-3xl mb-4 font-semibold">
							Selecione as opções para praticar
						</h1>
						<fieldset className="container bg-black-600/80">
							<h2 className="subtitle">Tipo de exercícios</h2>
							<Exercises />
						</fieldset>

						<fieldset aria-live="polite" className="container bg-black-600/80">
							{userSelectedOptions.exercise?.id !== exercises.type.problem ? (
								<>
									<h2 className="subtitle">Tipo de operador</h2>
									<Operators.Container
										handleChange={selectOperator}
										currentActiveOption={
											userSelectedOptions.operator?.id || null
										}
										className="grid grid-cols-[repeat(2,_1fr)] grid-rows-2 gap-2"
									>
										<Operators.List
											showOperatorName={true}
											imageSize="w-8 md:w-12 h-8 md:h-12"
										/>
									</Operators.Container>
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
							<BackButton href="/" />

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
