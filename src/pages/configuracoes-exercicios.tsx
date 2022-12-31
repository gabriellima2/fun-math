import { FormEvent } from "react";
import { NextPage } from "next";
import { useRouter } from "next/router";

import { useExercisePreferences } from "@contexts/ExercisePreferences";

import { ExercisesOption, OperatorsOption } from "@components/Options";
import { PlayButton } from "@components/Buttons/PlayButton";
import { BackLink } from "@components/Links/BackLink";
import { Container } from "@components/Container";
import { Warning } from "@components/Warning";

import { Customized } from "@layouts/Customized";

const ExerciseSettings: NextPage = () => {
	const router = useRouter();
	const { exercisePreferences, userPreferencesIsValid } =
		useExercisePreferences();

	const needOperator = exercisePreferences.exercise?.needOperator;

	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		if (!userPreferencesIsValid()) return;

		if (needOperator) {
			return router.push({
				pathname: "/fazer-exercicio",
				query: {
					type: exercisePreferences.exercise!.id,
					operator: exercisePreferences.operator!.id,
				},
			});
		}

		router.push({
			pathname: "/fazer-exercicio",
			query: {
				type: exercisePreferences.exercise!.id,
			},
		});
	};

	return (
		<Customized>
			<Container className="pt-6 md:pt-4">
				<main className="w-full flex-center--row">
					<form
						onSubmit={handleSubmit}
						className="w-full max-w-[900px] flex-center--col gap-8 sm:gap-10"
					>
						<label className="font-accent font-bold text-xl sm:text-2xl">
							Selecione as opções
						</label>

						<div className="w-full flex flex-col gap-6 sm:gap-8">
							<fieldset className="w-full bg-utils-primary p-5 sm:p-6 rounded-xl">
								<ExercisesOption />
							</fieldset>

							<fieldset
								aria-live="polite"
								aria-atomic="true"
								className="w-full bg-utils-primary p-5 sm:p-6 rounded-xl"
							>
								{needOperator || needOperator === undefined ? (
									<OperatorsOption />
								) : (
									<Warning>
										Esse tipo de exercício usa operadores aleatórios
									</Warning>
								)}
							</fieldset>
						</div>

						<footer className="w-full flex justify-between">
							<BackLink href="/" />
							<PlayButton disabled={!userPreferencesIsValid()} />
						</footer>
					</form>
				</main>
			</Container>
		</Customized>
	);
};

export default ExerciseSettings;
