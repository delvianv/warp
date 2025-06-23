"use client";

import { useActionState, useEffect, useState } from "react";

import { getLocation, getWeather } from "./lib/actions";
import { Location, Weather } from "./lib/types";
import Loading from "./ui/components/Loading";
import LocationList from "./ui/components/LocationList";
import SearchForm from "./ui/components/SearchForm";
import WeatherCard from "./ui/components/WeatherCard";
import ErrorAlert from "./ui/components/ErrorAlert";

export default function HomePage() {
  const [locationResponse, formAction, loadingLocation] = useActionState(
    getLocation,
    undefined
  );

  const [loadingWeather, setLoadingWeather] = useState(false);
  const [locations, setLocations] = useState<Location[]>();
  const [weather, setWeather] = useState<Weather>();
  const [error, setError] = useState<string>();

  useEffect(() => {
    if (locationResponse) {
      switch (locationResponse.status) {
        case "success":
          setLocations(locationResponse.data as Location[]);
          break;
        case "error":
          setError(locationResponse.data as string);
          break;
      }
    }
  }, [locationResponse]);

  const loading = loadingLocation || loadingWeather;

  const reset = () => {
    setLocations(undefined);
    setWeather(undefined);
    setError(undefined);
  };

  const handleSearch = (formData: FormData) => {
    reset();
    formAction(formData);
  };

  const handleGetWeather = async (location: Location) => {
    reset();

    setLoadingWeather(true);
    const weatherResponse = await getWeather(location);
    switch (weatherResponse.status) {
      case "success":
        setWeather(weatherResponse.data as Weather);
        break;
      case "error":
        setError(weatherResponse.data as string);
        break;
    }
    setLoadingWeather(false);
  };

  return (
    <main className="m-8 grow flex flex-col gap-6 md:w-md md:mx-auto">
      {error && <ErrorAlert message={error} />}

      <SearchForm handleSearch={handleSearch} />

      {loading && <Loading />}

      {locations && !loading && (
        <LocationList locations={locations} onClick={handleGetWeather} />
      )}

      {weather && !loading && <WeatherCard weather={weather} />}
    </main>
  );
}
