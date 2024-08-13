import CardProductDetails from "@/components/card/cardProductDetails";
import { Metadata, ResolvingMetadata } from "next";
import React from "react";

type Props = {
  params: { id: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

const ENDPOINT = "https://fakestoreapi.com/products/";

const getData = async (id: string) => {
  const res = await fetch(`${ENDPOINT}${id}`);
  const data = res.json();
  return data;
};

export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // read route params
  const id = params.id;

  // fetch data
  const product = await fetch(`https://fakestoreapi.com/products/${id}`).then(
    (res) => res.json()
  );

  // optionally access and extend (rather than replace) parent metadata
  const previousImages = (await parent).openGraph?.images || [];

  return {
    title: product.title,
    description: product.description,
    openGraph: {
      // images: [product.image, ...previousImages],
      images: product.image,
    },
  };
}

export default async function ServiceId(props: Props) {
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
