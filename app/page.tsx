"use client";

import Image from "next/image";
import { useActionState, useState } from "react";

import { fetchIcon } from "./lib/API";
import { getLocations, getWeather } from "./lib/actions";
import { Location, Weather } from "./lib/types";

export default function HomePage() {
  const [locations, formAction] = useActionState(getLocations, []);
  const [weather, setWeather] = useState<Weather>();

  const handleSearch = (formData: FormData) => {
    formAction(formData);
    setWeather(undefined);
  };

  const handleGetWeather = async (location: Location) => {
    const weather = await getWeather(location);
    setWeather(weather);
  };

  return (
    <main className="m-8 grow flex flex-col gap-6 md:w-md md:mx-auto">
      <form action={handleSearch} className="flex flex-col md:flex-row gap-2">
        <label className="input w-full">
          <span className="label">City</span>
          <input type="text" name="city" />
        </label>
        <button className="btn">Search</button>
      </form>

      {locations && !weather && (
        <ul className="list bg-base-100 rounded-box shadow-md">
          {locations.map((location, index) => (
            <li key={index} className="list-row">
              <button
                onClick={() => handleGetWeather(location)}
                className="btn"
              >{`${location.name}, ${location.state}, ${location.country}`}</button>
            </li>
          ))}
        </ul>
      )}

      {weather && (
        <div className="card bg-base-100 shadow-sm">
          <figure>
            <Image src={fetchIcon(weather)} alt="" width={200} height={200} />
          </figure>
          <div className="card-body text-center">
            <h2 className="card-title self-center text-2xl">{weather.name}</h2>
            <p className="text-5xl font-bold my-4">
              {weather.main.temp} &deg;C
            </p>
            <p className="capitalize">{weather.weather[0].description}</p>
          </div>
        </div>
      )}
    </main>
  );
}
