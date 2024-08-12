import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeadCell,
  TableRow,
} from "flowbite-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const ENDPOINT = "https://fakestoreapi.com/products";

export default async function ProductList({
  searchParams,
}: {
  searchParams: { page?: string };
}) {
  const page = parseInt(searchParams.page || "1"); // Default to page 1 if undefined
  const limit = 8; // Set the number of items per page

  // Fetch the current page of products
  const res = await fetch(`${ENDPOINT}?limit=${limit}&page=${page}`, { cache: 'force-cache' });
  const products = await res.json();

  const totalPages = 5; 

  return (
    <div className="ml-[270px]">
      <div className="">
        <Table striped>
          <TableHead>
              <TableHeadCell>Product name</TableHeadCell>
              <TableHeadCell>Category</TableHeadCell>
              <TableHeadCell>Price</TableHeadCell>
              <TableHeadCell>Description</TableHeadCell>
              <TableHeadCell>Image</TableHeadCell>
              <TableHeadCell>
                <span className="sr-only">Edit</span>
              </TableHeadCell>
          </TableHead>
          <TableBody className="divide-y">
            {products.map((product, index) => (
              <TableRow
                key={index}
                className="bg-white dark:border-gray-700 dark:bg-gray-800"
              >
                <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                  {product.title}
                </TableCell>
                <TableCell>{product.category}</TableCell>
                <TableCell>{product.price}</TableCell>
                <TableCell className="whitespace-nowrap overflow-hidden text-ellipsis max-w-xs">
                  {product.description}
                </TableCell>
                <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                  <Image
                    className="w-10 h-10 rounded-full object-cover"
                    unoptimized
                    src={product.image}
                    width={100}
                    height={100}
                    alt="product image"
                  />
                </TableCell>
                <TableCell>
                  <a
                    href="#"
                    className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
                  >
                    Edit
                  </a>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>

        {/* Pagination */}
        <div className="flex justify-center mt-4">
          <Link
            href={`?page=${page - 1}`}
            className={`px-4 py-2 mx-1 border rounded ${
              page === 1 ? "cursor-not-allowed opacity-50" : ""
            }`}
            aria-disabled={page === 1}
          >
            Previous
          </Link>
          {/* Page Numbers */}
          {[...Array(totalPages)].map((_, i) => (
            <Link
              key={i + 1}
              href={`?page=${i + 1}`}
              className={`px-4 py-2 mx-1 border rounded ${
                page === i + 1 ? "bg-blue-500 text-white" : ""
              }`}
            >
              {i + 1}
            </Link>
          ))}
          <Link
            href={`?page=${page + 1}`}
            className={`px-4 py-2 mx-1 border rounded ${
              page === totalPages ? "cursor-not-allowed opacity-50" : ""
            }`}
            aria-disabled={page === totalPages}
          >
            Next
          </Link>
        </div>
      </div>
    </div>
  );
}
