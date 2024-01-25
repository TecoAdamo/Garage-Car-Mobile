import { CarModel } from "./props";

import { fetchGetCarData } from "../api/getCars";

export const loadCarData = async (
  id: number,
  setCarData: React.Dispatch<React.SetStateAction<CarModel | null>>
) => {
  try {
    const response = await fetchGetCarData(id);

    if (response) {
      setCarData(response);
    } else {
      console.log("Resposta vazia da API");
      setCarData(null);
    }
  } catch (error) {
    console.error("Erro ao buscar da API", error);
    setCarData(null);
  }
};

export const handlePreviousItem = async (
  carData: CarModel | null,
  setCarData: React.Dispatch<React.SetStateAction<CarModel | null>>
) => {
  let response = null;
  try {
    if (carData && carData?.id > 1) {
      response = await fetchGetCarData(carData.id - 1);
    }
    if (response) {
      setCarData(response);
    }
  } catch (error) {
    console.log("Erro ao chamar da API", error);
    setCarData(null);
  }
};

export const handleNextItem = async (
  carData: CarModel | null,
  setCarData: React.Dispatch<React.SetStateAction<CarModel | null>>
) => {
  let response = null;
  try {
    if (carData && carData?.id < 10) {
      response = await fetchGetCarData(carData.id + 1);
    }
    if (response) {
      setCarData(response);
    }
  } catch (error) {
    console.log("Erro ao chamar da API", error);
    setCarData(null);
  }
};
