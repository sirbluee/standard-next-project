import CardProductDetails from "@/components/card/cardProductDetails";
import React from "react";
type PropsParams = {
  params: {
    id: number;
  };
  searchParams: any;
};

const ENDPOINT = "https://fakestoreapi.com/products/";

export const getData = async (id: number) => {
//   const res = await fetch(`${ENDPOINT}${id}`, {cache: "no-store"}); 
  const res = await fetch(`${ENDPOINT}${id}`);
  const data = res.json();
  return data;
};

export default async function ServiceId(props: PropsParams) {
  const data = await getData(props.params.id);
  return (
    <div className="h-screen grid place-content-center">
      <CardProductDetails
        title={data?.title || "No title"}
        description={data?.description || "No description"}
        image={data?.image || "No image"}
      />
    </div>
  );
}
