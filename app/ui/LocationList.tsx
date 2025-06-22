import { Location } from "@/app/lib/types";

interface ListProps {
  locations: Location[];
  onClick: (location: Location) => void;
}

export default function LocationList({ locations, onClick }: ListProps) {
  return (
    <ul className="list bg-base-100 rounded-box shadow-md">
      {locations.map((location, index) => (
        <li key={index} className="list-row flex">
          <button onClick={() => onClick(location)} className="btn w-full">{`${
            location.name
          }, ${location.state ? `${location.state}, ` : ""}${
            location.country
          }`}</button>
        </li>
      ))}
    </ul>
  );
}
