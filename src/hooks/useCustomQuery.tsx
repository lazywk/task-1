import {
  useQuery,
  UseQueryOptions,
  UseQueryResult,
} from '@tanstack/react-query';

type CustomQueryOptions<TQueryFnData, TError, TData> = UseQueryOptions<
  TQueryFnData,
  TError,
  TData
>;

export function useCustomQuery<
  TQueryFnData = unknown,
  TError = unknown,
  TData = TQueryFnData,
>(
  options: CustomQueryOptions<TQueryFnData, TError, TData>,
): UseQueryResult<TData, TError> {
  return useQuery({
    ...options,
    staleTime: options.staleTime ?? 60000,
    refetchOnWindowFocus: options.refetchOnWindowFocus ?? false,
    refetchOnReconnect: options.refetchOnReconnect ?? false,
    enabled: options.enabled ?? true,
    retry: options.retry ?? false,
  });
}
