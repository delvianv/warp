"use client";

import { useActionState, useState } from "react";

import { getLocations, getWeather } from "./lib/actions";
import { Location, Weather } from "./lib/types";
import Loading from "./ui/Loading";
import LocationList from "./ui/LocationList";
import SearchForm from "./ui/SearchForm";
import WeatherCard from "./ui/WeatherCard";

export default function HomePage() {
  const [locations, formAction, loading] = useActionState(getLocations, []);
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
      <SearchForm handleSearch={handleSearch} />

      {loading && <Loading />}

      {locations && !weather && (
        <LocationList locations={locations} onClick={handleGetWeather} />
      )}

      {weather && <WeatherCard weather={weather} />}
    </main>
  );
}
