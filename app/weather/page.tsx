import { fetchWeather } from "../lib/API";

interface WeatherProps {
  searchParams: {
    lat: number;
    lon: number;
  };
}

export default async function WeatherPage({ searchParams }: WeatherProps) {
  const { lat, lon } = searchParams;
  const weather = await fetchWeather(lat, lon);
  console.log(weather);
}
