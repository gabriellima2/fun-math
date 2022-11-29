import type { NextPage } from "next";
import { GetStaticProps } from "next";

import { StartNowLink } from "@components/Links/StartNowLink";
import { AccentParagraph } from "@components/AccentParagraph";
import { Behaviors } from "@components/Behaviors";
import { Container } from "@components/Container";
import { Steps } from "@components/Steps";

import { Common } from "@layouts/Common";

import { getSteps } from "src/utils/GetSteps";
import type { StepModel } from "@models/step-model";

interface HomeProps {
	steps: StepModel[];
}

const SECONDS_TO_REVALIDATE = 60;

const Home: NextPage<HomeProps> = ({ steps }) => {
	return (
		<Common>
			<main id="home">
				<Container className="flex-center--col gap-8 md:gap-10 my-[150px] md:my-[140px] lg:my-[160px]">
					<div className="flex-center--col gap-4 md:gap-5">
						<h1 className="max-w-[400px] sm:max-w-[480px] md:max-w-[800px] text-2xl sm:text-4xl md:text-5xl xl:text-6xl font-black text-center leading-tight md:leading-[1.1]">
							<span className="text-transparent bg-clip-text bg-gradient-to-r from-font via-accents-secondary to-accents-primary">
								Operadores Matemáticos
							</span>{" "}
							Básicos na Prática
						</h1>
						<h2 className="max-w-[350px] md:max-w-[470px] text-sm md:text-base lg:text-lg text-center">
							Use diversos exercícios para praticar e aumentar seu conhecimento
							em matemática
						</h2>
					</div>
					<StartNowLink />
				</Container>
			</main>

			<section className="bg-utils-primary">
				<Container>
					<Steps steps={steps} />
				</Container>
			</section>

			<section id="howItWork">
				<Container className="flex-center--col md:flex-row gap-12 md:gap-0 justify-around xl:justify-between xl:px-20 2xl:max-w-[1400px] my-[6px] md:my-[50px] lg:my-[100px]">
					<div className="flex flex-col gap-6 md:gap-7">
						<h2 className="md:max-w-[400px] text-xl md:text-2xl lg:text-4xl font-bold">
							Supere dificuldades no aprendizado
						</h2>
						<div className="flex flex-col gap-5 md:gap-6">
							<AccentParagraph className="max-w-[380px]">
								Pensando em usabilidade, desenvolvemos uma plataforma simples e
								intuitiva.
							</AccentParagraph>
							<AccentParagraph className="max-w-[380px]">
								Disponibilizamos ferramentas para ajudar os usuários na
								conclusão do exercício.
							</AccentParagraph>
						</div>
						<StartNowLink />
					</div>
					<div>
						<Behaviors />
					</div>
				</Container>
			</section>
		</Common>
	);
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {
	const response = await getSteps();

	return {
		props: {
			steps: response,
		},
		revalidate: SECONDS_TO_REVALIDATE,
	};
};
