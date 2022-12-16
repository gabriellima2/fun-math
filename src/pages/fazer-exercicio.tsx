import { NextPage } from "next";

import { ChangeExerciseButton } from "@components/Buttons/ChangeExerciseButton";
import { BackLink } from "@components/Links/BackLink";
import { HelpTools } from "@components/HelpTools/HelpTools";
import { Status } from "@components/Status";
import { Input } from "@components/Inputs";

import {
	HandleGenerateExercise,
	HandleGenerateExerciseInjectedProps,
} from "@hoc/HandleGenerateExercise";
import { ValidateQueriesFromURL } from "@hoc/ValidateQueriesFromURL";

interface DoExerciseProps extends HandleGenerateExerciseInjectedProps {}

const DoExercise: NextPage<DoExerciseProps> = ({
	injectedProps: { Render, type },
}) => {
	console.log(Render);

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
						Qual o resultado de 10 + 10?
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
					<ChangeExerciseButton />
				</footer>
			</div>
		</main>
	);
};

export default ValidateQueriesFromURL(HandleGenerateExercise(DoExercise));
