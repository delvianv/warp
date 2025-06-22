"use client";

import ErrorAlert from "./ui/ErrorAlert";

interface PageProps {
  error: Error;
  reset: () => void;
}

export default function ErrorPage({ error, reset }: PageProps) {
  return (
    <main className="m-8 grow flex flex-col gap-6 md:w-md md:mx-auto">
      <ErrorAlert message="Server error!" />

      <button className="btn" onClick={reset}>
        Reset
      </button>
    </main>
  );
}
