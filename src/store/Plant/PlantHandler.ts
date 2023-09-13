import Plant from "../../models/Plant";

export const addCartPlantHandler = (state: any, actPlant: Plant) => {
  const contain = state.cartPlants!.find(
    (plant: Plant) => plant.id === actPlant.id
  );

  if (contain) {
    return [
      ...state.cartPlants?.filter((plant: Plant) => plant.id !== actPlant.id),
    ];
  } else {
    return [...state.cartPlants!, { ...actPlant, quantity: 1 }];
  }
};

export const increaseCartPlantHandler = (state: any, actPlant: Plant) => {
  const contain = state.cartPlants!.find(
    (plant: Plant) => plant.id === actPlant.id
  );

  if (contain) {
    return [
      ...state.cartPlants!.map((plant: Plant) =>
        plant.id === actPlant.id
          ? { ...plant, quantity: ++plant.quantity }
          : { ...plant }
      ),
    ];
  } else {
    return [...state.cartPlants!, { ...actPlant, quantity: 1 }];
  }
};

export const decreaseCartPlantHandler = (state: any, actPlant: Plant) => {
  if (actPlant.quantity > 1) {
    return [
      ...state.cartPlants!.map((plant: Plant) =>
        plant.id === actPlant.id
          ? { ...plant, quantity: --plant.quantity }
          : { ...plant }
      ),
    ];
  } else {
    return [
      ...state.cartPlants!.filter((plant: Plant) => plant.id !== actPlant.id),
    ];
  }
};
