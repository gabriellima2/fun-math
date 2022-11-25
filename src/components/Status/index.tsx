interface StatusProps {
	status: "correct" | "incorrect" | "noInformation";
}

const Correct = () => <p aria-labelledby="status">Certo!</p>;

const Incorrect = () => <p aria-labelledby="status">Errado!</p>;

const NoInformation = () => <p aria-labelledby="status">Sem informações</p>;

export const Status = ({ status, ...props }: StatusProps) => {
	const render = {
		correct: () => <Correct />,
		incorrect: () => <Incorrect />,
		noInformation: () => <NoInformation />,
	};

	return (
		<div id="status" role="status">
			{render[status]()}
		</div>
	);
};
