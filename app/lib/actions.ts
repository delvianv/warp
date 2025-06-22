"use server";

import { fetchLocations, fetchWeather } from "./API";
import { Location } from "./types";

export async function getLocations(formState: Location[], formData: FormData) {
  const city = formData.get("city");
  if (!city) return [];

  const locations = await fetchLocations(city.toString());
  return locations;
}

export async function getWeather(location: Location) {
  const weather = await fetchWeather(location);
  return weather;
}
