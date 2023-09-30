"use client";
import "./globals.css";

import Sidebar from "@/components/Sidebar";
import NavBar from "@/components/NavBar";


import { Fragment, useState, useEffect } from "react";
import { Dialog, Menu, Transition } from "@headlessui/react";
import {
  Bars3Icon,
  BellIcon,
  CalendarIcon,
  ChartPieIcon,
  Cog6ToothIcon,
  DocumentDuplicateIcon,
  FolderIcon,
  HomeIcon,
  UsersIcon,
  XMarkIcon
} from "@heroicons/react/24/outline";
import {
  ChevronDownIcon,
  MagnifyingGlassIcon
} from "@heroicons/react/20/solid";

const navigation = [
  { name: "Dashboard", href: "#", icon: HomeIcon, current: true },
  { name: "Team", href: "#", icon: UsersIcon, current: false },
  { name: "Projects", href: "#", icon: FolderIcon, current: false },
  { name: "Calendar", href: "#", icon: CalendarIcon, current: false },
  { name: "Documents", href: "#", icon: DocumentDuplicateIcon, current: false },
  { name: "Reports", href: "#", icon: ChartPieIcon, current: false }
];
const teams = [
  { id: 1, name: "Heroicons", href: "#", initial: "H", current: false },
  { id: 2, name: "Tailwind Labs", href: "#", initial: "T", current: false },
  { id: 3, name: "Workcation", href: "#", initial: "W", current: false }
];
const userNavigation = [
  { name: "Your profile", href: "#" },
  { name: "Sign out", href: "#" }
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

import { Inter } from "next/font/google";
import Provider from "./Provider";

const inter = Inter({ subsets: ["latin"] });

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
          <div>
            {isSidebar ? <Sidebar isMobile={isMobile} /> : ""}
            <div className="lg:pl-72">
              <NavBar onSideBar={onSideBar} />

              <main className="py-10 bg-[#F0F8FF]">
                <div className="px-4 sm:px-6 lg:px-8">{children}</div>
              </main>
            </div>
          </div>
        </Provider>
      </body>
    </html>
  );
}
