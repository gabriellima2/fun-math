/* eslint-disable indent */
import { BsFillCheckSquareFill, BsFillXSquareFill } from "react-icons/bs";

import { ClassName, WithChildren } from "../types";

interface StatusProps extends WithChildren {
	isCorrect: boolean | undefined;
	className?: ClassName;
}

const Success = () => (
	<i
		aria-labelledby="status"
		aria-label="Resposta Certa"
		className="text-green-600"
	>
		<BsFillCheckSquareFill />
	</i>
);

const Error = () => (
	<i
		aria-labelledby="status"
		aria-label="Resposta Errada"
		className="text-red-600"
	>
		<BsFillXSquareFill />
	</i>
);

export const Status = ({ isCorrect, ...props }: StatusProps) => {
	return (
		<div
			id="status"
			role="status"
			className={`${props.className} ${
				isCorrect === undefined
					? "from-black-700 via-black-800"
					: isCorrect
					? "from-green-800/30"
					: "from-red-800/30"
			} text-3xl  bg-gradient-to-l w-full flex-center--row gap-4 mt-12 p-6 md:p-10 rounded-md`}
		>
			{props.children}
			{isCorrect === undefined ? null : isCorrect ? <Success /> : <Error />}
		</div>
	);
};
