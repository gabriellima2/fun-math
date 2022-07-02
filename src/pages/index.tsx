import type { NextPage } from "next";
import Link from "next/link";
import { BsFillArrowRightSquareFill } from "react-icons/bs";

import { Common } from "../layouts/Common";

const Home: NextPage = () => {
	return (
		<Common>
			<main className="min-h-full bg-home-mobile bg-cover bg-no-repeat bg-center flex flex-col items-center gap-10 p-4 pb-24">
				<section className="mt-36">
					<h1 className="text-4xl text-pink-200 font-staatliches tracking-wide flex flex-col">
						<span className="text-6xl after:content-['👋']">Olá</span>
						Seja bem-vindo&#40;a&#41;!
					</h1>
					<p className="w-[230px] text-sm text-center m-auto mt-3">
						Aqui na FunMath! você aprende e se diverte
					</p>
				</section>
				<Link href="/">
					<a className="main-button text-sm mb-36">
						Comece Agora{" "}
						<i className="text-xl opacity-70">
							<BsFillArrowRightSquareFill />
						</i>
					</a>
				</Link>
			</main>
			<section>
				<h1>Como funciona?</h1>
			</section>
		</Common>
	);
};

export default Home;
