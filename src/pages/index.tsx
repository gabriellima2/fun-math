import { gql } from "@apollo/client";
import type { NextPage } from "next";
import { GetStaticProps } from "next";
import { BsBoxArrowInRight } from "react-icons/bs";

import { Card } from "../components/Card";
import { MainLink } from "../components/MainLink";

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
				<section className="mt-36 lg:mt-44 lg:ml-30 text-center px-1">
					<h1 className="w-full min-w-auto max-w-[400px] md:max-w-[750px] lg:max-w-[800px] text-3xl md:text-6xl lg:text-7xl capitalize font-bold tracking-wide">
						Praticar operadores matemáticos básicos
					</h1>
					<h2 className="w-full min-w-auto max-w-[360px] md:max-w-[450px] lg:max-w-[530px] text-base md:text-xl lg:text-2xl text-center text-pink-100/80 m-auto mt-4">
						Use diversos exercícios para praticar e aumentar seu conhecimento em
						matemática
					</h2>
				</section>
				<MainLink
					href="/choose-options"
					icon={{
						element: BsBoxArrowInRight,
						label: "Seta para direita",
						className: "text-xl sm:text-2xl",
					}}
					className="rounded-sm mb-36 lg:mb-36"
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
						<h1 className="text-2xl md:text-4xl xl:text-7xl text-center xl:text-left max-w-[350px] md:max-w-[550px] xl:max-w-[800px] capitalize font-semibold tracking-wide">
							Funcionamento{" "}
							<span className="font-semibold gradient-text">simples</span>.
							Muito{" "}
							<span className="font-semibold gradient-text">aprendizado</span>
						</h1>
						<p className="max-w-xs md:max-w-none md:w-[430px] xl:w-[450px] text-base md:text-lg lg:text-xl">
							Coloque em prática seus conhecimentos com exercícios da plataforma
						</p>
					</section>
					<section className="mt-12 mb-8">
						<ul className="flex-center--col sm:overflow-x-auto sm:flex-row sm:justify-start xl:grid xl:grid-cols-2 xl:grid-rows-4 xl:place-items-center gap-5 xl:gap-4 sm:pb-4 md:pb-0">
							{cards.map((card, index) => (
								<Card {...card} index={index} key={card.title} />
							))}
						</ul>
					</section>
				</div>

				<MainLink variants="text" href="choose-options">
					Fiquei interessado. Testar agora!
				</MainLink>
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
