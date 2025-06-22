import { Location, Weather } from "./types";

const location = "http://api.openweathermap.org/geo/1.0/direct";
const weather = "https://api.openweathermap.org/data/2.5/weather";

const key = process.env.API_KEY;

const icons = "https://openweathermap.org/img/wn";

export async function fetchLocations(city: string) {
  const response = await fetch(`${location}?q=${city}&appid=${key}&limit=5`);
  const data: Location[] = await response.json();
  return data;
}

export async function fetchWeather(location: Location) {
  const response = await fetch(
    `${weather}?lat=${location.lat}&lon=${location.lon}&appid=${key}&units=metric`
  );
  const data: Weather = await response.json();

  // Simulate loading
  await new Promise((resolve) => setTimeout(resolve, 3000));

  return data;
}

export function fetchIcon(weather: Weather) {
  const icon = weather.weather[0].icon;
  return `${icons}/${icon}@4x.png`;
}
