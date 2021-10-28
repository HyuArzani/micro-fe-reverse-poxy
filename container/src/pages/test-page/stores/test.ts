import create from 'zustand';
import { persist } from 'zustand/middleware';

type TestStore = {
    testData: any;
    setTestData: (data: any) => void;
};

const useTestStore = create<TestStore>(persist((set): TestStore => ({
  testData: {},
  setTestData: (data: any) => set({ testData: data }),
}), {
  name: 'testData',
}));

export default useTestStore;
