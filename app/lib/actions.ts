"use server";

import { fetchLocation, fetchWeather } from "./API";
import { Location, LocationResponse, WeatherResponse } from "./types";

export async function getLocation(
  formState: LocationResponse | undefined,
  formData: FormData
): Promise<LocationResponse> {
  const city = formData.get("city");

  try {
    const locations = await fetchLocation(city as string);
    return { status: "success", data: locations };
  } catch (error) {
    console.error(error);
    return { status: "error", data: "Error fetching locations" };
  }
}

export async function getWeather(location: Location): Promise<WeatherResponse> {
  try {
    const weather = await fetchWeather(location);
    return { status: "success", data: weather };
  } catch (error) {
    console.error(error);
    return { status: "error", data: "Error fetching weather" };
  }
}
