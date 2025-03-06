import { BASE_URL } from "../services/dogService";

export const fetchDogsBreeds = async () => {
  const res = await fetch(`${BASE_URL}/breeds/list/all`);
  const data = res.json();
  return data;
};
