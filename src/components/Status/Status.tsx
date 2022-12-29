import { Correct, Incorrect } from "./components";
import type { TStatus } from "@global-types/TStatus";

interface StatusProps {
	status?: TStatus;
}

export const Status = ({ status, ...props }: StatusProps) => {
	const render = {
		correct: () => <Correct />,
		incorrect: () => <Incorrect />,
	};

	return (
		<div
			id="status"
			role="status"
			aria-live="polite"
			aria-atomic="true"
			className={`${
				!status ? "opacity-0" : "opacity-100"
			} transition animate-pulse font-bold text-lg sm:text-xl md:text-2xl`}
		>
			{status && render[status]()}
		</div>
	);
};
