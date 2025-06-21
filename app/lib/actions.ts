"use server";

import { fetchLocations } from "./API";
import { Location } from "./types";

export async function getLocations(formState: Location[], formData: FormData) {
  const city = formData.get("city");
  if (!city) return [];

  const locations = await fetchLocations(city.toString());
  return locations;
}
