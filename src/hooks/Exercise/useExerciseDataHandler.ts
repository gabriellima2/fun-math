import { useEffect, useMemo } from "react";

import { ExerciseData, ExerciseDataResponse } from "../../types/hooks";
import { getExerciseType } from "../../utils/getExerciseType";

type Data = ExerciseDataResponse | undefined;
type SaveData = (data: ExerciseData) => void;

export function useExerciseDataHandler(data: Data, saveData: SaveData) {
	/* O "data" é um objeto e objetos não são iguais, não ocupam o mesmo espaço
	na memória, assim entre renderizações vamos ter a mesma instância do objeto. */
	const dataMemoized = useMemo(() => data, [data && data.result]);

	/* Usa-se o "dataMemoized" como dependência ao invés do "data" para evitar
	loops, assim adicionando os dados atualizados. */
	useEffect(() => {
		if (!dataMemoized) return;

		saveData({
			...dataMemoized,
			result: dataMemoized.result,
			type: getExerciseType(dataMemoized.result),
		});
	}, [dataMemoized]);
}
