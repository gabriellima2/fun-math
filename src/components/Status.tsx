/* eslint-disable indent */
import { useContext } from "react";
import { BsFillCheckSquareFill, BsFillXSquareFill } from "react-icons/bs";
import { CurrentExerciseContext } from "../contexts/CurrentExerciseContext";

import { ClassName, WithChildren } from "../types";

interface StatusProps extends WithChildren {
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

export const Status = (props: StatusProps) => {
	const { userAnswerIsCorrect } = useContext(CurrentExerciseContext);

	return (
		<div
			id="status"
			role="status"
			className={`${props.className} ${
				userAnswerIsCorrect === null
					? "from-black-700 via-black-800"
					: userAnswerIsCorrect
					? "from-green-800/30"
					: "from-red-800/30"
			} text-3xl  bg-gradient-to-l w-full flex-center--row gap-4 mt-12 p-6 md:p-10 rounded-md`}
		>
			{props.children}
			{userAnswerIsCorrect === null ? null : userAnswerIsCorrect ? (
				<Success />
			) : (
				<Error />
			)}
		</div>
	);
};
