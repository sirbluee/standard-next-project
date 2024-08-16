"use client";
import React from "react";
import ButtonComponent from "../activate-comfirm-email/[key]/components/Button";
import { useRouter } from "next/navigation";

export default function ContactPage() {
  const router = useRouter();
  const handleClickHome = () => {
    router.push("/");
  };
  const handleClickRouteServices = () => {
    router.push("/services");
  };
  return (
    <div className="h-screen grid grid-cols place-content-center gap-2">
      <ButtonComponent title="Home" onClick={handleClickHome} />
      <ButtonComponent title="Services" classname="bg-green-700 text-sm" onClick={handleClickRouteServices} />
    </div>
  );
}
