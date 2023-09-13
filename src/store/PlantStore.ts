import { create } from "zustand";
import Plant from "../models/Plant";

type UseUserStoreType = {
  favoritedPlants: Plant[] | undefined;
  favoritePlant: (newPlant: Plant) => void;
  unfavoritePlant: (plantId: string) => void;
};

const usePlantsStore = create<UseUserStoreType>((set) => ({
  favoritedPlants: [],

  favoritePlant: (newPlant: Plant) => {
    set((state) => ({
      favoritedPlants: [...state.favoritedPlants!, newPlant],
    }));
  },

  unfavoritePlant: (plantId: string) => {
    set((state) => ({
      favoritedPlants: [
        ...state.favoritedPlants!.filter((plant) => plant.id !== plantId),
      ],
    }));
  },
}));

export default usePlantsStore;
