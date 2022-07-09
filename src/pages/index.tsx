import type { NextPage } from "next";
import { BsArrowRight } from "react-icons/bs";

import { Card } from "../components/Card";
import { TextLink, MainLink } from "../components/Links";

import { Common } from "../layouts/Common";

import { cards } from "../constants";

const Home: NextPage = () => {
	return (
		<Common>
			<main
				id="home"
				className="min-h-full lg:w-full flex-center--col gap-8 md:gap-12 bg-home-mobile md:bg-home-desktop bg-cover bg-no-repeat bg-center p-4 pb-24"
			>
				<section className="mt-36 lg:mt-44 lg:ml-30 text-center">
					<h1 className="w-full min-w-auto max-w-[400px] md:max-w-[750px] text-4xl md:text-6xl lg:text-7xl font-medium text-pink-200 font-accent tracking-wider">
						operadores matemáticos básicos na prática
					</h1>
					<h2 className="w-full min-w-auto max-w-[320px] md:max-w-[450px] text-sm md:text-lg lg:text-xl text-center text-pink-100/80 m-auto mt-4">
						Pratique e relembre cálculos com operadores básicos com diversos
						exercícios
					</h2>
				</section>
				<MainLink href="/choose-options" icon={BsArrowRight}>
					comece agora
				</MainLink>
			</main>
			<section
				id="howItWork"
				className="h-full bg-black-800 p-4 lg:p-12 py-7 text-center"
			>
				<div className="flex-center--col lg:flex-row lg:gap-16 lg:justify-evenly">
					<section className="flex-center--col gap-5 lg:items-start lg:text-left">
						<h1 className="max-w-[220px] md:max-w-none md:w-72 lg:w-full lg:max-w-[530px] font-accent text-3xl md:text-4xl lg:text-7xl text-purple-200 tracking-wide">
							Funcionamento simples e intuitivo
						</h1>
						<p className="max-w-xs md:w-96 lg:w-[400px] text-sm md:text-base lg:text-lg">
							Aprenda de forma simples a <strong>teoria</strong> e{" "}
							<strong>pratique</strong> aqui mesmo em nossa plataforma
						</p>
					</section>
					<section className="mt-12 mb-8">
						<ul className="flex-center--col md:flex-row md:items-center lg:grid lg:grid-cols-2 lg:grid-rows-4 lg:place-items-center gap-4 lg:gap-3">
							{cards.map((card) => (
								<Card {...card} key={card.id} />
							))}
						</ul>
					</section>
				</div>

				<TextLink href="choose-options">
					Fiquei interessado! Quero praticar
				</TextLink>
			</section>
		</Common>
	);
};

export default Home;
