import axios from "axios";
import Plant from "../models/Plant";

const API = "https://8jcox47hg2.execute-api.us-east-2.amazonaws.com/dev/";

export async function fetchData() {
  const response = await axios.get(API);

  return response;
}

export async function fetchPopularPlantsCard(): Promise<Array<IPlantsCard>> {
  const response = await axios.get(API);
  const data = response.data.body.data.mostPopular;

  const plants: Array<IPlantsCard> = [];

  data.map((plant: Plant) => {
    const plantCard = {
      id: plant.id,
      title: plant.title,
      price: plant.price,
      category: plant.category,
      image: plant.image,
    };
    plants.push(plantCard);
  });

  return plants;
}

export async function fetchItemPlantsCard(): Promise<Array<IPlantsCard>> {
  const response = await axios.get(API);
  const data = response.data.body.data.items;

  const plants: Array<IPlantsCard> = [];

  data.map((plant: Plant) => {
    const plantCard = {
      id: plant.id,
      title: plant.title,
      price: plant.price,
      category: plant.category,
      image: plant.image,
    };
    plants.push(plantCard);
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
