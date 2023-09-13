import axios from "axios";
import Plant from "../models/Plant";

const API = "https://8jcox47hg2.execute-api.us-east-2.amazonaws.com/dev/";

export async function fetchData() {
  const response = await axios.get(API);

  return response;
}

export async function fetchPopularPlantsCard(): Promise<Array<Plant>> {
  const response = await axios.get(API);
  const data = response.data.body.data.mostPopular;

  const plants: Array<Plant> = [];

  data.map((plant: Plant) => {
    plant.isLiked = false;
    plant.quantity = 0;
    plants.push(plant);
  });

  return plants;
}

export async function fetchItemPlantsCard(): Promise<Array<Plant>> {
  const response = await axios.get(API);
  const data = response.data.body.data.items;

  const plants: Array<Plant> = [];

  data.map((plant: Plant) => {
    plant.isLiked = false;
    plant.quantity = 0;
    plants.push(plant);
  });

  return plants;
}

export async function fetchPlantById(id: string): Promise<Plant> {
  const response = await axios.get(API);
  let data = response.data.body.data.mostPopular;
  const data2 = response.data.body.data.items;

  data = [...data, ...data2];

  const plant = data.filter((plant: Plant) => plant.id === id)[0];

  return plant;
}
