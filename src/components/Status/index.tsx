interface StatusProps {
	status?: "correct" | "incorrect" | null;
}

const Correct = () => (
	<p aria-labelledby="status" className="text-green-400">
		👍 Certo!
	</p>
);

const Incorrect = () => (
	<p aria-labelledby="status" className="text-red-400">
		😞 Errado!
	</p>
);

export const Status = ({ status, ...props }: StatusProps) => {
	const render = {
		correct: () => <Correct />,
		incorrect: () => <Incorrect />,
	};

	return (
		<div
			id="status"
			role="status"
			className={`${
				!status ? "opacity-0" : "opacity-100"
			} transition animate-pulse font-bold text-lg sm:text-xl md:text-2xl`}
		>
			{status && render[status]()}
		</div>
	);
};
