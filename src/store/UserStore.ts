import { create } from "zustand";
import User from "../models/User";
import Plant from "../models/Plant";

type UseUserStoreType = {
  currentUser: User | undefined;
  setCurrentUser: (currentUser: User) => void;
  removeCurrentUser: () => void;

  purchases: Array<Plant[]>;
  addPurchases: (plants: Plant[]) => void;
};

const useUserStore = create<UseUserStoreType>((set) => ({
  currentUser: undefined,

  setCurrentUser: (currentUser: User) =>
    set(() => ({ currentUser: currentUser })),

  removeCurrentUser: () => set(() => ({ currentUser: undefined })),

  purchases: [],

  addPurchases: (plants: Plant[]) => {
    set((state) => ({
      purchases: [...state.purchases, plants],
    }));
  },
}));

export default useUserStore;
