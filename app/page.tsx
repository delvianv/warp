"use client";

import { useActionState } from "react";

import { getLocations } from "./lib/actions";
import { Location } from "./lib/types";

const initialState: Location[] = [];

export default function HomePage() {
  const [locations, formAction] = useActionState(getLocations, initialState);

  return (
    <main className="m-8 grow flex flex-col gap-6 md:w-md md:mx-auto">
      <form action={formAction} className="flex flex-col md:flex-row gap-2">
        <label className="input w-full">
          <span className="label">City</span>
          <input type="text" name="city" />
        </label>

        <button className="btn">Search</button>
      </form>

      <ul className="list bg-base-100 rounded-box shadow-md">
        {locations.map((location, index) => (
          <li key={index} className="list-row">
            <button className="btn">{`${location.name}, ${location.state}, ${location.country}`}</button>
          </li>
        ))}
      </ul>
    </main>
  );
}
