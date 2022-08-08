import { useEffect, useMemo } from "react";

import { ExerciseMode } from "../../types/hooks";
import { limitDecimalPlaces } from "../../utils/handleNumbers";

type data = ExerciseMode | undefined;
type SaveData = (data: ExerciseMode) => void;

export function useExerciseDataHandler(data: data, saveData: SaveData) {
	/* O "data" é um objeto e objetos não são iguais, não ocupam o mesmo espaço
	na memória, assim entre renderizações vamos ter a mesma instância do objeto. */
	const dataMemoized = useMemo(() => data, [data?.result]);

	const formatExerciseResult = (result: string | undefined) => {
		if (!result) return result;

		if (result.includes(".")) return limitDecimalPlaces(result, 3);

		return result;
	};

	/* Usa-se o "dataMemoized" como dependência ao invés do "data" para evitar
	loops, assim adicionando os dados atualizados. */
	useEffect(() => {
		if (!dataMemoized) return;

		saveData({
			...dataMemoized,
			result: formatExerciseResult(dataMemoized.result) || dataMemoized.result,
		});
	}, [dataMemoized]);
}
