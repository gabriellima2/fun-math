import { Step } from "./components/Step";
import type { StepModel } from "@models/step-model";

interface StepsProps {
	steps: StepModel[];
}

export const Steps = ({ steps }: StepsProps) => {
	return (
		<ul className="w-full flex flex-col lg:flex-row items-center justify-evenly flex-wrap gap-12 lg:gap-6">
			{steps.map((step, index) => (
				<Step {...step} key={index} />
			))}
		</ul>
	);
};
