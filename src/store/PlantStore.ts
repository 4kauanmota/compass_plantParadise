import { create } from "zustand";
import Plant from "../models/Plant";

type UseUserStoreType = {
  favoritedPlants: Plant[] | undefined;
  cartPlants: Plant[] | undefined;
  addFavoritePlant: (newPlant: Plant) => void;
  removeFavoritePlant: (plantId: string) => void;
  addCartPlant: (newPlant: Plant) => void;
  removeCartPlant: (plantId: string) => void;
};

const usePlantsStore = create<UseUserStoreType>((set) => ({
  favoritedPlants: [],

  cartPlants: [],

  addFavoritePlant: (newPlant: Plant) => {
    set((state) => ({
      favoritedPlants: [...state.favoritedPlants!, newPlant],
    }));
  },

  removeFavoritePlant: (plantId: string) => {
    set((state) => ({
      favoritedPlants: [
        ...state.favoritedPlants!.filter((plant) => plant.id !== plantId),
      ],
    }));
  },

  addCartPlant: (newPlant: Plant) => {
    set((state) => ({
      cartPlants: [...state.cartPlants!, newPlant],
    }));
  },

  removeCartPlant: (plantId: string) => {
    set((state) => ({
      cartPlants: [
        ...state.cartPlants!.filter((plant) => plant.id !== plantId),
      ],
    }));
  },
}));

export default usePlantsStore;
