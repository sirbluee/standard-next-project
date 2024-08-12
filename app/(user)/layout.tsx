import "@/app/globals.css";
import { NavbarComponent } from "@/components/navbar/NavbarComponent";
import { Suspense } from "react";
import Loading from "./loading";
import { ErrorBoundary } from "next/dist/client/components/error-boundary";
import CustomErrorComponent from "./error";
import { FooterComponent } from "@/components/footer/FooterComponent";
import { inter, suwannaphum, localCustomFont } from "./font";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`h-screen flex flex-col bg-slate-300 justify-between
        ${inter.variable} ${suwannaphum.variable} ${localCustomFont.variable}
        `}>
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
