import { useEffect, useMemo } from "react";

import { ExerciseData, ExerciseDataResponse } from "../../types/hooks";
import { isCurrency, isDecimal } from "../../utils/handleExerciseResultType";

type Data = ExerciseDataResponse | undefined;
type SaveData = (data: ExerciseData) => void;

function getExerciseType(value: string) {
	if (isCurrency(value)) return "currency";

	if (isDecimal(value)) return "decimal";

	return "normal";
}

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
