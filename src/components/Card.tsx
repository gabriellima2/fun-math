import Image from "next/image";

import { CardContent } from "../pages";

interface CardProps extends CardContent {
	index: number;
}

export const Card = (props: CardProps) => (
	<li
		className={`${
			props.index != 0
				? "lg:col-start-2 lg:col-end-3 lg:row-span-2"
				: "lg:row-start-2 lg:row-end-4"
		} w-[75%] sm:flex-shrink-0 md:flex-shrink sm:w-[45%] lg:w-full w-max-[320px] h-full`}
	>
		<div className="h-full min-h-[15.5rem] md:min-h-[18rem] bg-black-500/60 p-6 xl:p-4 py-9 flex-center--col gap-2 lg:gap-4 shadow-black-600 shadow rounded-sm">
			<div className="w-[3.1rem] md:w-14 xl:w-20 h-12 md:min-h-[52px] xl:h-20 relative">
				<Image
					src={props.icon.url}
					alt={`Icone do Card ${props.title}`}
					layout="fill"
				/>
			</div>
			<h1 className="text-xl md:text-lg lg:text-2xl font-semibold opacity-90 mt-4">
				{props.title}
			</h1>
			<p className="md:w-max[270px] md:h-[70px] lg:h-auto text-sm lg:text-base lg:leading-5 text-center opacity-80">
				{props.description}
			</p>
		</div>
	</li>
);
