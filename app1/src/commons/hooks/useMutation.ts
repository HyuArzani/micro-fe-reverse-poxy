import { useState } from 'react';
import { useMutation } from 'react-query';
import { commons } from '../helpers';

export default function useMutationHook(mutationFn: any, callbackOptions?: any) {
  const [cancelSignal, setCancelSignal] = useState({ signal: null, controller: {} }) as any;

  const mutationResponse = useMutation(mutationFn, callbackOptions);

  const mutateFunc = (params: any) => {
    const cancelRequest = commons.generateCancelSignal();
    setCancelSignal(cancelRequest);
    mutationResponse.mutate({
      ...params,
      cancelSignal: cancelRequest
    });
  };

  return {
    ...mutationResponse,
    mutate: mutateFunc,
    cancelSignal,
  };
}
