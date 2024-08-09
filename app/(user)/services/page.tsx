"use client";
import { CardProduct } from "@/components/card/cardProduct";
import { Pagination, Spinner } from "flowbite-react";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

export default function Service() {
  const router = useRouter();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  const ENDPOINT = "https://fakestoreapi.com/products/";

  const onPageChange = (page: number) => setCurrentPage(page);
  const totalPages = Math.ceil(products.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedProducts = products.slice(startIndex, endIndex);

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
    <div className="flex flex-col items-center mt-14 py-14 mx-14">
      <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
        {paginatedProducts.map((product: any, index) => (
          <CardProduct
            onClick={() => router.push(`/services/${product.id}`)}
            key={index}
            title={product.title}
            price={product.price}
            image={product.image}
          />
        ))}
      </div>
      <div className="mt-4">
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={onPageChange}
        />
      </div>
    </div>
  );
}
