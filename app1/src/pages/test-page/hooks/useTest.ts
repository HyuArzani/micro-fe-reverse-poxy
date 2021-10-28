import useQueryHook from '../../../commons/hooks/useQuery';
import { getUserPage } from '../api/test';

export default function useTestHook() {
  const { data, cancelSignal } = useQueryHook('get-user-page1', () => getUserPage({ page: 1 }), {
    cacheTime: 0
  });

  const cancelRequest = () => {
    cancelSignal.controller.abort();
  };

  return {
    data, cancelRequest
  };
}
