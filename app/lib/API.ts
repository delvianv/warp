import { Location, Weather } from "./types";

const location = "http://api.openweathermap.org/geo/1.0/direct";
const weather = "https://api.openweathermap.org/data/2.5/weather";

const key = process.env.API_KEY;

const icons = "https://openweathermap.org/img/wn";

export async function fetchLocation(city: string): Promise<Location[]> {
  const response = await fetch(`${location}?q=${city}&appid=${key}&limit=5`);

  if (!response.ok) throw new Error("Error fetching locations");
  return await response.json();
}

export async function fetchWeather(location: Location): Promise<Weather> {
  const { lat, lon } = location;

  const response = await fetch(
    `${weather}?lat=${lat}&lon=${lon}&appid=${key}&units=metric`
  );

  if (!response.ok) throw new Error("Error fetching weather");
  return await response.json();
}

export function fetchIcon(weather: Weather) {
  const icon = weather.weather[0].icon;
  return `${icons}/${icon}@4x.png`;
}
