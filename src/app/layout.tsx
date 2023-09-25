"use client";
import "./globals.css";
import type { Metadata } from "next";
import Sidebar from "@/components/Sidebar";
import NavBar from "@/components/NavBar";
import { useState, useEffect } from "react";
import { Inter } from "next/font/google";
import Provider from "./Provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Blue Trade",
  description: "Crypto Dashboard with next.js"
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  const [isSidebar, setSidebar] = useState(true);
  const [isMobile, setMobile] = useState(false);
  const onSideBar = () => {
    setSidebar(!isSidebar);
  };
  useEffect(() => {
    if (window.innerWidth < 1280) {
      setSidebar(false);
      setMobile(true);
    } else setMobile(false);
  }, []);
  return (
    <html lang="en">
      <link
        rel="shortcut icon"
        href="/images/favicon.svg"
        type="image/x-icon"
      />
      <body className={inter.className}>
        <Provider>
          <main className="flex  bg-light dark:bg-dark">
            {isSidebar ? <Sidebar isMobile={isMobile} /> : ""}
            <div className="flex flex-col w-full">
              <NavBar onSideBar={onSideBar} />
              {children}
            </div>
          </main>
        </Provider>
      </body>
    </html>
  );
}
