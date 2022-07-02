import Image from "next/image";

import { Cards } from "../types";

type CardProps = Cards;

export const Card = (props: CardProps) => (
	<li>
		<div className="bg-black-500/60 p-6 py-9 flex-center--col gap-4">
			<Image {...props.image} width={50} height={50} />
			<h1 className="text-xl font-staatliches text-purple-200/70 mt-1">
				{props.title}
			</h1>
			<p className="w-72 text-sm text-center opacity-80">{props.description}</p>
		</div>
	</li>
);
