import { create } from "zustand";
import Plant from "../../models/Plant";
import {
  addCartPlantHandler,
  decreaseCartPlantHandler,
  increaseCartPlantHandler,
} from "./PlantHandler";

type UseUserStoreType = {
  favoritedPlants: Plant[] | undefined;
  addFavoritePlant: (newPlant: Plant) => void;
  removeFavoritePlant: (plantId: string) => void;

  cartPlants: Plant[] | undefined;
  addCartPlant: (newPlant: Plant) => void;
  increaseCartPlant: (plant: Plant) => void;
  decreaseCartPlant: (plant: Plant) => void;
  removeCartPlant: (plantId: string) => void;
  cleanCart: () => void;
};

const usePlantsStore = create<UseUserStoreType>((set) => ({
  favoritedPlants: [],

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

  cartPlants: [],

  addCartPlant: (newPlant: Plant) => {
    set((state) => ({
      cartPlants: [...addCartPlantHandler(state, newPlant)],
    }));
  },

  increaseCartPlant: (plant: Plant) => {
    set((state) => ({
      cartPlants: [...increaseCartPlantHandler(state, plant)],
    }));
  },

  decreaseCartPlant: (plant: Plant) => {
    set((state) => ({
      cartPlants: [...decreaseCartPlantHandler(state, plant)],
    }));
  },

  removeCartPlant: (plantId: string) => {
    set((state) => ({
      cartPlants: [
        ...state.cartPlants!.filter((plant) => plant.id !== plantId),
      ],
    }));
  },

  cleanCart: () => {
    set(() => ({
      cartPlants: [],
    }));
  },
}));

export default usePlantsStore;
