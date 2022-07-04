import type { NextPage } from "next";
import Link from "next/link";
import { BsFillArrowRightSquareFill } from "react-icons/bs";

import { Card } from "../components/Card";
import { Character } from "../components/Character";

import { Common } from "../layouts/Common";

import { cards } from "../contents";

const Home: NextPage = () => {
	return (
		<Common>
			<main
				id="home"
				className="min-h-full lg:w-full lg:grid lg:grid-cols-[repeat(2,_50%)] lg:place-items-center bg-home-mobile md:bg-home-desktop bg-cover bg-no-repeat bg-center p-4 pb-24"
			>
				<section className="lg:w-fit flex-center--col gap-10 lg:items-center mt-36 lg:mt-44 lg:ml-30">
					<section>
						<h1 className="text-4xl md:text-5xl lg:text-6xl font-medium text-pink-200 font-staatliches tracking-wider flex flex-col">
							<span className="text-6xl md:text-8xl after:content-['👋'] after:text-4xl after:md:text-6xl">
								Olá
							</span>
							Seja bem-vindo&#40;a&#41;!
						</h1>
						<p className="w-[230px] md:w-[260px] lg:w-[290px] text-sm md:text-base lg:text-lg text-center text-pink-100/80 m-auto mt-3">
							Aqui na FunMath! você prática e se diverte
						</p>
					</section>
					<Link href="/learning">
						<a className="main-button text-sm md:text-base md:p-3 md:px-4 mb-36 lg:mb-44 transition-hover hover:brightness-75">
							Comece Agora{" "}
							<i className="text-xl md:text-4xl opacity-70">
								<BsFillArrowRightSquareFill />
							</i>
						</a>
					</Link>
				</section>
				<section className="hidden lg:block">
					<Character />
				</section>
			</main>
			<section
				id="howItWork"
				className="h-full bg-black-800 p-4 lg:p-12 py-7 text-center lg:relative"
			>
				<div className="flex-center--col lg:flex-row lg:gap-16 lg:justify-evenly">
					<section className="flex-center--col gap-5 lg:items-start lg:text-left">
						<h1 className="max-w-[220px] md:max-w-none md:w-72 lg:w-full lg:max-w-[530px] font-staatliches text-3xl md:text-4xl lg:text-7xl text-purple-200 tracking-wide">
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
				<Link href="/learning">
					<a className="text-accents-pink font-semibold underline focus:brightness-75 hover:brightness-50 transition-hover">
						Fiquei interessado! Quero praticar
					</a>
				</Link>
			</section>
		</Common>
	);
};

export default Home;
