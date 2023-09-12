import { create } from "zustand";
import User from "../models/User";

type UseUserStoreType = {
  currentUser: User | undefined;
  setCurrentUser: (currentUser: User) => void;
  removeCurrentUser: () => void;
};

const useUserStore = create<UseUserStoreType>((set) => ({
  currentUser: undefined,

  setCurrentUser: (currentUser: User) =>
    set(() => ({ currentUser: currentUser })),
  removeCurrentUser: () => set(() => ({ currentUser: undefined })),
}));

export default useUserStore;
