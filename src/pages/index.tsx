import { gql } from "@apollo/client";
import type { NextPage } from "next";
import { GetStaticProps } from "next";
import { BsArrowRight } from "react-icons/bs";

import { Card } from "../components/Card";
import { TextLink, MainLink } from "../components/Links";

import { Common } from "../layouts/Common";
import { client } from "../lib/client";

export interface CardContent {
	title: string;
	description: string;
	icon: {
		url: string;
	};
}

interface CardData {
	cards: CardContent[];
}

type HomeProps = CardData;

const SECONDS_TO_REVALIDATE = 60;

const Home: NextPage<HomeProps> = ({ cards }) => {
	return (
		<Common>
			<main
				id="home"
				className="min-h-full lg:w-full flex-center--col gap-8 md:gap-12 bg-home-mobile md:bg-home-desktop bg-cover bg-no-repeat bg-center p-4 pb-24"
			>
				<section className="mt-36 lg:mt-44 lg:ml-30 text-center">
					<h1 className="w-full min-w-auto max-w-[400px] md:max-w-[750px] lg:max-w-[800px] text-4xl md:text-6xl lg:text-7xl capitalize font-medium tracking-wide">
						Praticar operadores matemáticos básicos
					</h1>
					<h2 className="w-full min-w-auto max-w-[360px] md:max-w-[450px] lg:max-w-[530px] text-base md:text-xl lg:text-2xl text-center text-pink-100/80 m-auto mt-4">
						Use os nossos diversos exercícios para praticar e aumentar seu
						conhecimento em matemática
					</h2>
				</section>
				<MainLink
					href="/choose-options"
					icon={{ element: BsArrowRight, label: "Seta para direita" }}
				>
					comece agora
				</MainLink>
			</main>
			<section
				id="howItWork"
				className="h-full bg-black-800 p-4 lg:p-12 py-7 text-center"
			>
				<div className="flex-center--col xl:flex-row xl:gap-12 xl:justify-evenly">
					<section className="flex-center--col gap-5 xl:items-start text-center xl:text-left">
						<h1 className="text-2xl md:text-4xl xl:text-7xl text-center xl:text-left max-w-[350px] md:max-w-[550px] xl:max-w-[800px] uppercase font-semibold tracking-wide">
							Funcionamento{" "}
							<span className="text-purple-400 font-medium">simples</span>.
							Muito{" "}
							<span className="text-purple-400 font-medium">conhecimento</span>
						</h1>
						<p className="max-w-xs md:max-w-none md:w-[430px] xl:w-[450px] text-base md:text-lg lg:text-xl">
							Coloque em prática seus conhecimentos com exercícios da plataforma
						</p>
					</section>
					<section className="mt-12 mb-8">
						<ul className="flex-center--col sm:overflow-x-auto sm:flex-row sm:justify-start xl:grid xl:grid-cols-2 xl:grid-rows-4 xl:place-items-center gap-4 xl:gap-3">
							{cards.map((card, index) => (
								<Card {...card} index={index} key={card.title} />
							))}
						</ul>
					</section>
				</div>

				<TextLink href="choose-options">
					Fiquei interessado. Testar agora!
				</TextLink>
			</section>
		</Common>
	);
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {
	const { data } = await client.query<CardData>({
		query: gql`
			query GetCards {
				cards {
					title
					description
					icon {
						url
					}
				}
			}
		`,
	});

	return {
		props: {
			cards: data.cards,
		},
		revalidate: SECONDS_TO_REVALIDATE,
	};
};
