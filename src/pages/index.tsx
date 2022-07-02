import type { NextPage } from "next";
import Link from "next/link";
import { BsFillArrowRightSquareFill } from "react-icons/bs";

import { Card } from "../components/Card";

import { Common } from "../layouts/Common";

import { cards } from "../contents";

const Home: NextPage = () => {
	return (
		<Common>
			<main className="min-h-full bg-home-mobile md:bg-home-desktop bg-cover bg-no-repeat bg-center p-4 pb-24">
				<section className="lg:w-fit flex-center--col gap-10 lg:items-center mt-36 lg:ml-48">
					<section>
						<h1 className="text-4xl md:text-5xl lg:text-6xl font-medium text-pink-200 font-staatliches tracking-wider flex flex-col">
							<span className="text-6xl md:text-8xl after:content-['👋'] after:text-4xl after:md:text-6xl">
								Olá
							</span>
							Seja bem-vindo&#40;a&#41;!
						</h1>
						<p className="w-[230px] md:w-[260px] lg:w-[290px] text-sm md:text-base lg:text-lg text-center text-pink-100/80 m-auto mt-3">
							Aqui na FunMath! você aprende e se diverte
						</p>
					</section>
					<Link href="/">
						<a className="main-button text-sm md:text-base md:p-3 md:px-4 mb-36 transition-hover hover:brightness-75">
							Comece Agora{" "}
							<i className="text-xl md:text-4xl opacity-70">
								<BsFillArrowRightSquareFill />
							</i>
						</a>
					</Link>
				</section>
			</main>
			<section className="h-full flex-center--col p-3 py-7 text-center">
				<h1 className="w-56 font-staatliches text-3xl text-purple-200 tracking-wide">
					Funcionamento simples e intuitivo
				</h1>
				<p className="w-72 mt-4">
					Aprenda de forma simples a <strong>teoria</strong> e{" "}
					<strong>pratique</strong> aqui mesmo em nossa plataforma
				</p>
				<section className="mt-12 mb-8">
					<ul className="flex-center--col gap-4">
						{cards.map((card) => (
							<Card {...card} key={card.id} />
						))}
					</ul>
				</section>
				<Link href="/">
					<a className="text-accents-pink font-semibold underline">
						Fiquei interessado! Quero começar
					</a>
				</Link>
			</section>
		</Common>
	);
};

export default Home;
