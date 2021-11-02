import { useEffect } from 'react';
import useQueryHook from '../../../commons/hooks/useQuery';
import { getUserPage } from '../api/test';
import useTestStore from '../stores/test';

export default function useTest2Hook() {
  const { data } = useQueryHook('get-user-page2', () => getUserPage({ page: 2 }));
  const setTestData = useTestStore((state) => state.setTestData);

  useEffect(() => {
    setTestData({ title: 'Test', date: new Date() });
  }, []);

  return {
    data
  };
}
