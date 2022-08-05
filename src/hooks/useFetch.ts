import {
	useQuery,
	QueryHookOptions,
	QueryResult,
	useLazyQuery,
	LazyQueryHookOptions,
	LazyQueryExecFunction,
	OperationVariables,
	DocumentNode,
	TypedDocumentNode,
} from "@apollo/client";

type Query<TData, TVars> = DocumentNode | TypedDocumentNode<TData, TVars>;

type DefaultFetchReturn<TData, TVars> = Pick<
	QueryResult<TData, TVars>,
	"loading" | "error" | "data"
>;

type LazyFetchCallback<TData, TVars> = LazyQueryExecFunction<TData, TVars>;

type LazyFetchReturn<TData, TVars> = [
	LazyFetchCallback<TData, TVars>,
	DefaultFetchReturn<TData, TVars>
];

export function useDefaultFetch<TData = unknown, TVars = OperationVariables>(
	query: Query<TData, TVars>,
	options?: QueryHookOptions<TData, TVars> | undefined
): DefaultFetchReturn<TData, TVars> {
	const { loading, error, data } = useQuery<TData, TVars>(query, {
		...options,
	});

	return { loading, error, data };
}

export function useLazyFetch<TData = unknown, TVars = OperationVariables>(
	query: Query<TData, TVars>,
	options?: LazyQueryHookOptions<TData, TVars> | undefined
): LazyFetchReturn<TData, TVars> {
	const [callback, { loading, error, data }] = useLazyQuery(query, {
		...options,
	});

	return [callback, { loading, error, data }];
}
