import SidebarComponent from "@/components/sidebar/SidebarComponent";
import React from "react";
import "@/app/globals.css";
export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body>
        <aside className="fixed h-screen">
          <SidebarComponent />
        </aside>
        <main className="">{children}</main>
      </body>
    </html>
  );
}
