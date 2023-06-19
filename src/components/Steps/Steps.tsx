import { Step } from "./components/Step";
import type { IStep } from "@global-types/IStep";

const staticSteps: IStep[] = [
	{
		iconURL: "/icons/operators.svg",
		title: "Escolha um operador",
		description:
			"Escolha entre os 4 operadores matemáticos básicos para praticar",
	},
	{
		iconURL: "/icons/pencil.svg",
		title: "Pratique com exercícios",
		description: "A prática é muito importante para o aprendizado",
	},
	{
		iconURL: "/icons/lamp.svg",
		title: "Dica e Ajuda",
		description: "Ferramentas para te auxiliar durante os exercícios",
	},
];

interface StepsProps {
	steps?: IStep[];
}

export const Steps = ({ steps = staticSteps }: StepsProps) => {
	return (
		<ul className="w-full flex flex-col lg:flex-row items-center justify-evenly flex-wrap gap-12 lg:gap-6">
			{steps.map((step, index) => (
				<Step {...step} key={index} />
			))}
		</ul>
	);
};
