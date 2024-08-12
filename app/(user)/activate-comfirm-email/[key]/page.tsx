"use client"
import React from "react";
import { ComfirmIcon } from "@/components/icons/FontAwsome.js";
type Props = {
  params: {
    key: string;
  };
  searchParams: any;
};
import style from "./style.module.css";
import Button from "./components/Button";
import { useRouter } from "next/navigation";

export default function ComfirmEmail(props: Props) {
  const router = useRouter();

  const handleLoginRedirect = () => {
    router.push("/login"); 
  };
  return (
    <main className={style.container}>
      <section className="flex flex-col items-center my-32">
        <ComfirmIcon classname="h-44 w-44 mb-3" color="#080" />
        <h1 className="text-6xl py-4">Email has been comfirmed</h1>
        <p className="text-3xl py-4">
          Your email comfirmed! You can to login page by click the button below.
        </p>
        <p className="text-3xl py-4">សូមអគុណ។</p>
        <Button title="Login" classname="mt-4" onClick={handleLoginRedirect} />
      </section>
    </main>
  );
}
