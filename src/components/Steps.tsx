import Image from "next/image";
import { IStepData } from "@interfaces/IStepData";

interface StepsProps {
	steps: IStepData[];
}

export const Step = (props: IStepData) => (
	<li className="flex-center--col sm:flex-row gap-6">
		<div className="w-[50px] h-12 md:w-[66px] md:h-16 relative">
			<Image
				src={props.icon.url}
				alt={`Icone do Card ${props.title}`}
				layout="fill"
			/>
		</div>
		<div className="flex-center--col sm:items-start gap-2">
			<h1 className="font-semibold text-base md:text-lg">{props.title}</h1>
			<p className="max-w-[250px] md:max-w-[300px] text-sm md:text-base text-center sm:text-left">
				{props.description}
			</p>
		</div>
	</li>
);

export const Steps = ({ steps }: StepsProps) => {
	return (
		<ul className="w-full flex flex-col lg:flex-row items-center justify-evenly flex-wrap gap-12 lg:gap-6">
			{steps.map((step, index) => (
				<Step {...step} key={index} />
			))}
		</ul>
	);
};
