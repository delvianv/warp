import Link from "next/link";

import { fetchWeather, fetchIcon } from "../lib/API";

interface WeatherProps {
  searchParams: {
    lat: number;
    lon: number;
  };
}

export default async function WeatherPage({ searchParams }: WeatherProps) {
  const { lat, lon } = await searchParams;
  const weather = await fetchWeather(lat, lon);
  const weatherCond = weather.weather[0];

  return (
    <div className="card w-sm bg-base-100 shadow-md mt-6">
      <div className="card-body items-center text-center">
        <h2 className="card-title text-2xl font-semibold">{weather.name}</h2>

        <div className="flex flex-col items-center gap-2">
          <img
            src={fetchIcon(weatherCond.icon)}
            alt="weather icon"
            className="w-20 h-20"
          />
          <p className="text-3xl font-bold">{weather.main.temp} &deg;C</p>
          <p className="text-lg">{weatherCond.main}</p>
          <p className="text-sm capitalize text-base-content/70">
            {weatherCond.description}
          </p>
        </div>

        <div className="mt-4">
          <Link href="/" className="btn btn-outline btn-sm">
            Search another location
          </Link>
        </div>
      </div>
    </div>
  );
}
