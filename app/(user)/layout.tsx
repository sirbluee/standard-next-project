import "@/app/globals.css";
import { NavbarComponent } from "@/components/navbar/NavbarComponent";
import { Suspense } from "react";
import Loading from "./loading";
import { ErrorBoundary } from "next/dist/client/components/error-boundary";
import CustomErrorComponent from "./error";
import { FooterComponent } from "@/components/footer/FooterComponent";
import { inter, suwannaphum, localCustomFont } from "./font";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fake Store Ecommerce Website",
  description: "We have many products available to our customers",
  openGraph: {
    title: "Fake Store Ecommerce Website",
    description: "Fake Store Ecommerce Website is available",
    images:
      "https://scontent.fpnh12-1.fna.fbcdn.net/v/t39.30808-6/366811861_1329420734627084_7857440287342084859_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeHSBbcpY6z4tk4nQx-ZPxxXZ4Z5I-GtDS1nhnkj4a0NLWEJey3IlMiXCclNyljrbRzxcYgJt4kNl661yWBiZFhV&_nc_ohc=OSjfg8fSEw8Q7kNvgEHClT2&_nc_ht=scontent.fpnh12-1.fna&oh=00_AYDo1nSxDzZLHIaPaXJZ3IZb1TqlEbdxHY_0F2_fH0WCKQ&oe=66C0AE20",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`h-screen flex flex-col bg-slate-300 justify-between
        ${inter.variable} ${suwannaphum.variable} ${localCustomFont.variable}
        `}
      >
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
