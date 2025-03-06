import { BASE_URL } from "../services/dogService";

export const fetchDogsByBreed = async (
  breedType: string
): Promise<string[]> => {
  const res = await fetch(`${BASE_URL}/breed/${breedType}/images`);
  return res.json().then((data) => data.message);
};
