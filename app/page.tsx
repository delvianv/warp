"use client";

import { useActionState } from "react";

import { getLocations } from "./lib/actions";
import { Location } from "./lib/types";

const initialState: Location[] = [];

export default function HomePage() {
  const [locations, formAction] = useActionState(getLocations, initialState);

  return (
    <main className="m-8 grow">
      <form
        action={formAction}
        className="flex flex-col md:flex-row gap-2 justify-center"
      >
        <label className="input w-full md:w-md">
          <span className="label">City</span>
          <input type="text" name="city" />
        </label>

        <button className="btn btn-primary">Submit</button>
      </form>
    </main>
  );
}
