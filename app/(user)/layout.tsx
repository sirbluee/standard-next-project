import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/app/globals.css";
import { NavbarComponent } from "@/components/navbar/NavbarComponent";
import { Suspense } from "react";
import Loading from "./loading";
import { ErrorBoundary } from "next/dist/client/components/error-boundary";
import CustomErrorComponent from "./error";
import { FooterComponent } from "@/components/footer/FooterComponent";
const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="h-screen flex flex-col bg-slate-300">
        <header>
          <NavbarComponent />
        </header>
        <ErrorBoundary errorComponent={CustomErrorComponent}>
          <Suspense fallback={<Loading />}>
            {children}
            <FooterComponent />
          </Suspense>
        </ErrorBoundary>
      </body>
    </html>
  );
}
