import { CarType } from "../Types";

const options = {
  method: "GET",
  headers: {
    "x-rapidapi-key": "a3840fce78mshc1e0b03983a458ep13015djsnf64a867a9d2b",
    "x-rapidapi-host": "cars-by-api-ninjas.p.rapidapi.com",
  },
};
type FilterType = {
  make?: string;
  model?: string;
  limit?: string;
  fuel_type?: string;
  year?: string;
};

export const fetcCars = async (paramsObj: FilterType): Promise<CarType[]> => {
  const {
    limit = "5",
    make = "Volvo",
    model = "xc90",
    fuel_type = "",
    year = "",
  } = paramsObj;
  const url = `https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=${make}&model=${model}&fuel_type=${fuel_type}&year=${year}&limit=${limit}`;
  const res = await fetch(url, options);
  return await res.json();
};
