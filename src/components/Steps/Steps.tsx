import { Step } from "./components/Step";
import type { IStep } from "@global-types/IStep";

const steps: IStep[] = [
	{
		iconURL:
			"https://media.graphassets.com/PfRmD4i4Tb6EVNdGEz4t?_gl=1*1fqilsh*_ga*MzQxNzIyMjgzLjE2NjY2MzI3MzU.*_ga_G6FYGSYGZ4*MTY3MjUyNTIxMC4xNC4xLjE2NzI1MjUyNzMuNTcuMC4w",
		title: "Escolha um operador",
		description:
			"Escolha entre os 4 operadores matemáticos básicos para praticar",
	},
	{
		iconURL:
			"https://media.graphassets.com/FmlpUmrkQlucaR8WtvAC?_gl=1*65z1kv*_ga*MzQxNzIyMjgzLjE2NjY2MzI3MzU.*_ga_G6FYGSYGZ4*MTY3MjUyNTIxMC4xNC4xLjE2NzI1MjUyNzMuNTcuMC4w",
		title: "Pratique com exercícios",
		description: "A prática é muito importante para o aprendizado",
	},
	{
		iconURL:
			"https://media.graphassets.com/j7y7Y6sWQiqHketkBPoY?_gl=1*65z1kv*_ga*MzQxNzIyMjgzLjE2NjY2MzI3MzU.*_ga_G6FYGSYGZ4*MTY3MjUyNTIxMC4xNC4xLjE2NzI1MjUyNzMuNTcuMC4w",
		title: "Dica e Ajuda",
		description: "Ferramentas para te auxiliar durante os exercícios",
	},
];

export const Steps = () => {
	return (
		<ul className="w-full flex flex-col lg:flex-row items-center justify-evenly flex-wrap gap-12 lg:gap-6">
			{steps.map((step, index) => (
				<Step {...step} key={index} />
			))}
		</ul>
	);
};
