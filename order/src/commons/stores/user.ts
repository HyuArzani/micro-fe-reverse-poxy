import create from 'zustand';
import { persist } from 'zustand/middleware';

type Store = {
    user: any;
    setUser: (newUser: any) => void;
};

const useUserStore = create<Store>(persist((set): Store => ({
  user: {},
  setUser: (user: any) => set({ user }),
}), {
  name: 'user',
}));

export default useUserStore;
