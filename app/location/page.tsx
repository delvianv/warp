import { redirect } from "next/navigation";

import { fetchLocation } from "../lib/API";

interface LocationProps {
  searchParams: {
    city: string;
  };
}

export default async function LocationPage({ searchParams }) {
  const { city } = await searchParams;
  const locations = await fetchLocation(city);

  if (locations.length === 0) {
    return (
      <div role="alert" className="alert alert-warning alert-soft w-lg">
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
      {locations.map((location, index: number) => (
        <li key={index} className="list-row">
          <a
            href={`/weather?lat=${location.lat}&lon=${location.lon}`}
            className="btn"
          >
            {`${location.name}, ${location.state ? `${location.state}, ` : ""}${
              location.country
            }`}
          </a>
        </li>
      ))}
    </ul>
  );
}
