import { ChangeEvent, useEffect, useState } from "react";

import { debounce } from "@utils/debounce";
import type { TStatus } from "@global-types/TStatus";

interface Return {
	userAnswer: string;
	userAnswerStatus: TStatus;
	clearUserAnswerState: () => void;
	handleUserAnswerChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export function useUserAnswer(exerciseResult: number | undefined): Return {
	const [userAnswer, setUserAnswer] = useState("");
	const [status, setStatus] = useState<TStatus>(null);

	const handleWithExerciseCorrection = () => {
		if (!exerciseResult) return;

		const userAnswerFormatted = Number(
			userAnswer.replaceAll(",", "").replaceAll(".", "")
		);

		setStatus(userAnswerFormatted === exerciseResult ? "correct" : "incorrect");
	};

	const handleUserAnswerChange = (e: ChangeEvent<HTMLInputElement>) => {
		setUserAnswer(e.target.value);
	};

	const clearState = () => {
		setUserAnswer("");
		setStatus(null);
	};

	useEffect(() => {
		if (!userAnswer) return setStatus(null);

		debounce(handleWithExerciseCorrection, 950);
	}, [userAnswer]);

	return {
		userAnswer,
		userAnswerStatus: status,
		clearUserAnswerState: clearState,
		handleUserAnswerChange,
	};
}
