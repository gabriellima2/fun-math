import { DependencyList, useEffect, useMemo } from "react";

// Para lidar com dados assincronos que não ocupam o mesmo espaço de memória.
export function useAsyncDataMemoizer<TData>(
	data: TData,
	callback: (memoizedData: TData) => void,
	deps: DependencyList
) {
	const memoizedData = useMemo(() => data, [...deps]);

	/* Usa-se o "memoizedData" como dependência ao invés do "data" para evitar
	loops, assim adicionando os dados atualizados. */
	useEffect(() => {
		if (!memoizedData) return;

		callback(memoizedData);
	}, [memoizedData]);
}
