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

import { ExerciseNames } from "@constants/index";
import { exercises } from "@mocks/exercises";
import { operators } from "@mocks/operators";

const ExerciseSettings: NextPage = () => {
	const router = useRouter();
	const { exercisePreferences, userPreferencesIsValid } =
		useExercisePreferences();

	const typeExerciseIsProblem =
		exercisePreferences.exercise?.id === ExerciseNames.problem;

	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		if (!userPreferencesIsValid()) return;

		if (typeExerciseIsProblem) {
			return router.push({
				pathname: "/fazer-exercicio",
				query: {
					type: exercisePreferences.exercise!.id,
				},
			});
		}

		router.push({
			pathname: "/fazer-exercicio",
			query: {
				type: exercisePreferences.exercise!.id,
				operator: exercisePreferences.operator?.id,
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
								<ExercisesOption exercises={exercises} />
							</fieldset>

							<fieldset
								aria-live="polite"
								aria-atomic="true"
								className="w-full bg-utils-primary p-5 sm:p-6 rounded-xl"
							>
								{typeExerciseIsProblem ? (
									<Warning>
										Esse tipo de exercício usa operadores aleatórios
									</Warning>
								) : (
									<OperatorsOption operators={operators} />
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
