"use client";
import { CardProduct } from "@/components/card/cardProduct";
import { Spinner } from "flowbite-react";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

export default function Service() {
  const router = useRouter();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const ENDPOINT = "https://fakestoreapi.com/products/";

  useEffect(() => {
    fetch(ENDPOINT)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="h-screen grid place-content-center text-6xl">
        <Spinner aria-label="Extra large spinner example" size="xl" />
      </div>
    );
  }

  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-4 place-content-center gap-4">
      {products.slice(0, 8).map((product: any, index) => (
        <CardProduct
          onClick={() => router.push(`/services/${product.id}`)}
          key={index}
          title={product.title}
          price={product.price}
          image={product.image}
        />
      ))}
    </div>
  );
}
