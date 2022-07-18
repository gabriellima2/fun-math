import { NextPage } from "next";

import { Canvas } from "../components/Canvas";

import { Customized } from "../layouts/Customized";
import { WithOptionSelected } from "../HOC/WithOptionSelected";

const Exercises: NextPage = () => {
	return (
		<Customized>
			<div className="flex-center--col p-4">
				<h1 className="text-xl md:text-2xl lg:text-3xl text-center mb-4 tracking-wide">
					Exercícios de Situações-problema
				</h1>
				<p className="md:w-auto md:max-w-[640px] lg:max-w-[720px] text-sm md:text-base lg:text-lg text-left mb-4 md:mb-8">
					<span className="font-bold text-accents-pink-100">4.</span> Lorem
					ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
					tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
					veniam.
				</p>

				<section className="w-[95vw] max-w-fit md:max-h-[1/2] overflow-hidden">
					<Canvas />
				</section>
			</div>
		</Customized>
	);
};

export default WithOptionSelected(Exercises);
