import { NextPage } from "next";

import { useExercisePreferences } from "@contexts/ExercisePreferences";

import { ExercisesOption, OperatorsOption } from "@components/Options";
import { Container } from "@components/Container";
import { Customized } from "@layouts/Customized";

import { exercises } from "@mocks/exercises";
import { operators } from "@mocks/operators";

const ExerciseSettings: NextPage = () => {
	const { exercisePreferences } = useExercisePreferences();

	return (
		<Customized>
			<Container className="pt-6 md:pt-4">
				<main className="w-full flex-center--row">
					<form className="w-full max-w-[900px] flex-center--col gap-12">
						<label className="font-accent font-bold text-2xl">
							Selecione as opções
						</label>

						<div className="w-full flex flex-col gap-8">
							<fieldset className="w-full bg-utils-primary p-5 sm:p-6 rounded-xl">
								<ExercisesOption exercises={exercises.data} />
							</fieldset>

							<fieldset className="w-full bg-utils-primary p-5 sm:p-6 rounded-xl">
								<OperatorsOption operators={operators.data} />
							</fieldset>
						</div>

						<footer>
							<button type="button">Voltar</button>
							<button type="button">Avançar</button>
						</footer>
					</form>
				</main>
			</Container>
		</Customized>
	);
};

export default ExerciseSettings;
