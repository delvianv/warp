"use client";

import { useActionState, useState } from "react";

import { getLocations, getWeather } from "./lib/actions";
import { Location, Weather } from "./lib/types";
import Loading from "./ui/Loading";
import LocationList from "./ui/LocationList";
import SearchForm from "./ui/SearchForm";
import WeatherCard from "./ui/WeatherCard";

export default function HomePage() {
  const [locations, formAction, loadingLocations] = useActionState(
    getLocations,
    []
  );
  const [loadingWeather, setLoadingWeather] = useState(false);
  const [weather, setWeather] = useState<Weather>();

  const loading = loadingLocations || loadingWeather;

  const handleSearch = (formData: FormData) => {
    setWeather(undefined);
    formAction(formData);
  };

  const handleGetWeather = async (location: Location) => {
    setLoadingWeather(true);
    const weather = await getWeather(location);
    setWeather(weather);
    setLoadingWeather(false);
  };

  return (
    <main className="m-8 grow flex flex-col gap-6 md:w-md md:mx-auto">
      <SearchForm handleSearch={handleSearch} />

      {loading && <Loading />}

      {locations && !weather && !loading && (
        <LocationList locations={locations} onClick={handleGetWeather} />
      )}

      {weather && !loading && <WeatherCard weather={weather} />}
    </main>
  );
}
