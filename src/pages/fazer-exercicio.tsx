import { NextPage } from "next";
import Error from "next/error";

import { useExercise } from "@hooks/useExercise";

import { ChangeExerciseButton } from "@components/Buttons/ChangeExerciseButton";
import { HelpTools } from "@components/HelpTools/HelpTools";
import { BackLink } from "@components/Links/BackLink";
import { Loading } from "@components/Loading";
import { Status } from "@components/Status";
import { Input } from "@components/Inputs";

import {
	GetExerciseService,
	GetExerciseServiceInjectedProps,
} from "@hoc/GetExerciseService";
import { ValidateQueriesFromURL } from "@hoc/ValidateQueriesFromURL";

interface DoExerciseProps extends GetExerciseServiceInjectedProps {}

const DoExercise: NextPage<DoExerciseProps> = ({
	injectedProps: { exerciseFetcher },
}) => {
	const { exercise, getNextExercise, isLoading, error } =
		useExercise(exerciseFetcher);

	if (error) return <Error statusCode={500} title={error} />;

	if (isLoading) return <Loading variant="fullscreen" />;

	return (
		<main className="w-screen h-screen flex-center--col">
			<div className="w-full max-w-[700px] px-4">
				<header className="flex items-center justify-between relative py-6 sm:py-10">
					<BackLink href="/configuracoes-exercicios" />
					<Status status={null} />
					<HelpTools />
				</header>

				<section className="flex-center--col gap-8 sm:gap-10 md:gap-12">
					<h1 className="font-bold text-xl sm:text-2xl md:text-4xl">
						{exercise?.text}
					</h1>

					<div>
						<Input.Text
							label="O resultado é"
							id="user-answer"
							name="user-answer"
							placeholder="Digite o resultado"
						/>
					</div>
				</section>

				<footer className="w-full flex items-center justify-end py-6 sm:py-10">
					<ChangeExerciseButton onClick={getNextExercise} />
				</footer>
			</div>
		</main>
	);
};

export default ValidateQueriesFromURL(GetExerciseService(DoExercise));
