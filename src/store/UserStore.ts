import { create } from "zustand";
import User from "../models/User";

type UseUserStoreType = {
  currentUser: User;
  setCurrentUser: (currentUser: User) => void;
  removeUser: () => void;
};

const useUserStore = create<UseUserStoreType>((set) => ({
  currentUser: new User(),
  setCurrentUser: (currentUser: User) =>
    set(() => ({ currentUser: currentUser })),
  removeUser: () => set(() => ({ currentUser: new User() })),
}));

export default useUserStore;
