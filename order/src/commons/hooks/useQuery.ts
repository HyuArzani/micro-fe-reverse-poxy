import { useQuery, useQueryClient } from 'react-query';

export default function useQueryHook(key: string, queryFn: any, callbackOptions?: any) {
  const queryResponse = useQuery(key, queryFn, callbackOptions);
  const queryClient = useQueryClient();
  const cancelRequest = () => {
    queryClient.cancelQueries(key);
  };

  return {
    ...queryResponse,
    cancelSignal: {
      signal: null,
      controller: {
        abort: cancelRequest
      }
    },
  };
}
