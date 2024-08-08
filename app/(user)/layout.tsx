import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/app/globals.css";
import { NavbarComponent } from "@/components/navbar/NavbarComponent";
import { Suspense } from "react";
import Loading from "./loading";
import { ErrorBoundary } from "next/dist/client/components/error-boundary";
import CustomErrorComponent from "./error";
const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="h-screen flex flex-col mx-14">
        <header>
          <NavbarComponent />
        </header>
        <ErrorBoundary errorComponent={CustomErrorComponent}>
          <Suspense fallback={<Loading />}>{children}</Suspense>
        </ErrorBoundary>
      </body>
    </html>
  );
}
