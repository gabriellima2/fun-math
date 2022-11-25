import { NextPage } from "next";

import { BackLink } from "@components/Links/BackLink";
import { HelpTools } from "@components/HelpTools";
import { Status } from "@components/Status";

import {
	HandleGenerateExercise,
	HandleGenerateExerciseInjectedProps,
} from "@hoc/HandleGenerateExercise";
import { ValidateQueriesFromURL } from "@hoc/ValidateQueriesFromURL";

interface DoExerciseProps extends HandleGenerateExerciseInjectedProps {}

const DoExercise: NextPage<DoExerciseProps> = ({
	injectedProps: { Render, type },
}) => {
	return (
		<main className="w-screen h-[89vh] flex-center--col">
			<div className="w-full max-w-[700px] px-4">
				<header className="flex items-center justify-between relative py-12">
					<BackLink href="/configuracoes-exercicios" />
					<Status status="correct" />
					<HelpTools />
				</header>

				<section className="flex-center--col gap-4">
					<h1 className="font-bold text-3xl">Qual o resultado de 10 + 10?</h1>

					<label>
						O resultado é
						<input
							type="text"
							name="user-answer"
							id="user-answer"
							placeholder="Digite aqui..."
						/>
					</label>
				</section>

				<footer>
					<button>Pular</button>
				</footer>
			</div>
		</main>
	);
};

export default ValidateQueriesFromURL(HandleGenerateExercise(DoExercise));
