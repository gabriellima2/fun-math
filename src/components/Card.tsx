import Image from "next/image";

import { Cards } from "../types";

type CardProps = Cards;

export const Card = (props: CardProps) => (
	<li
		className={`${
			props.id != "0"
				? "lg:col-start-2 lg:col-end-3 lg:row-span-2"
				: "lg:row-start-2 lg:row-end-4"
		} w-[75%] sm:w-1/2 lg:w-full w-max-[320px] h-full h-max-60 md:h-[260px] lg:h-full`}
	>
		<div className="h-full bg-black-500/60 p-6 lg:p-4 py-9 flex-center--col gap-4">
			<div className="w-12 h-12 xl:h-16 xl:w-20 relative">
				<Image {...props.image} layout="fill" />
			</div>
			<h1 className="text-xl lg:text-2xl font-staatliches text-purple-200/70 mt-1">
				{props.title}
			</h1>
			<p className="md:w-max[270px] md:h-[70px] lg:h-auto text-sm lg:text-base lg:leading-5 text-center opacity-80">
				{props.description}
			</p>
		</div>
	</li>
);
