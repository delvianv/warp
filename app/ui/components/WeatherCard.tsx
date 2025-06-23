import Image from "next/image";

import { fetchIcon } from "@/app/lib/API";
import { Weather } from "@/app/lib/types";

interface CardProps {
  weather: Weather;
}

export default function WeatherCard({ weather }: CardProps) {
  return (
    <div className="card bg-base-100 shadow-sm">
      <figure>
        <Image src={fetchIcon(weather)} alt="" width={200} height={200} />
      </figure>
      <div className="card-body text-center">
        <h2 className="card-title self-center text-2xl">{weather.name}</h2>
        <p className="text-5xl font-bold my-4">{weather.main.temp} &deg;C</p>
        <p className="capitalize">{weather.weather[0].description}</p>
      </div>
    </div>
  );
}
