import { Spinner } from "flowbite-react";
import React from "react";

export default function Loading() {
  return (
    <div className="h-screen grid place-content-center text-6xl">
      <Spinner aria-label="Extra large spinner example" size="xl" />
    </div>
  );
}
