import { redirect } from "next/navigation";

import { fetchLocation } from "../lib/API";

interface LocationProps {
  searchParams: {
    city: string;
  };
}

interface Location {
  name: string;
  state: string;
  country: string;
  lat: number;
  lon: number;
}

export default async function LocationPage({
  searchParams,
}: {
  searchParams: {
    city: string;
  };
}) {
  const { city } = searchParams;
  const locations: Location[] = await fetchLocation(city);

  if (locations.length === 0) {
    return (
      <div role="alert" className="alert alert-warning w-lg">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 shrink-0 stroke-current"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
          />
        </svg>
        <span>No results found</span>
      </div>
    );
  }

  if (locations.length === 1) {
    const { lat, lon } = locations[0];
    redirect(`/weather?lat=${lat}&lon=${lon}`);
  }

  return (
    <ul className="list bg-base-100 rounded-box shadow-md w-lg">
      {locations.map((location: Location, index: number) => (
        <li key={index} className="list-row">
          <a
            href={`/weather?lat=${location.lat}&lon=${location.lon}`}
            className="btn"
          >{`${location.name}, ${location.state}, ${location.country}`}</a>
        </li>
      ))}
    </ul>
  );
}
