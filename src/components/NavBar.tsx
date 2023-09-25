"use client";
import React from "react";
import Image from "next/image";
import { Menu, Transition } from "@headlessui/react";
import ThemeSwitcher from "./ThemeSwitcher";
import { Fragment } from "react";

type NavbarProps = {
  onSideBar: () => void;
};

const Navbar: React.FC<NavbarProps> = ({ onSideBar }) => {
  return (
    <div className="flex justify-between items-center bg-white dark:bg-[#1C1C25]  py-4 px-8">
      <button className="block  xl:hidden pr-4" onClick={onSideBar}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </button>
      {/* Search input */}
      <div className="flex justify-between items-center rounded-full border px-4  w-2/5">
        <input
          type="text"
          id="search"
          placeholder="Search..."
          className="focus:outline-none w-full px-4 py-2 dark:bg-[#1C1C25]"
        />
        <label htmlFor="search">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none">
            <path
              d="M7.69724 15.3945C9.40504 15.3941 11.0636 14.8224 12.4089 13.7704L16.6385 18L17.999 16.6395L13.7694 12.4099C14.822 11.0645 15.3941 9.40549 15.3945 7.69724C15.3945 3.45318 11.9413 0 7.69724 0C3.45318 0 0 3.45318 0 7.69724C0 11.9413 3.45318 15.3945 7.69724 15.3945ZM7.69724 1.92431C10.881 1.92431 13.4702 4.51347 13.4702 7.69724C13.4702 10.881 10.881 13.4702 7.69724 13.4702C4.51347 13.4702 1.92431 10.881 1.92431 7.69724C1.92431 4.51347 4.51347 1.92431 7.69724 1.92431Z"
              fill="#C4CACD"
            />
          </svg>
        </label>
      </div>

      {/* Navbar right */}
      <div className="flex items-center gap-8">
        <ThemeSwitcher />

        {/* Notification */}
        <div className="cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="27"
            height="28"
            viewBox="0 0 27 28"
            fill="none">
            <path
              d="M22.2069 15.0486V12.5517H20.2759V15.4483C20.2759 15.7043 20.3777 15.9499 20.5588 16.1309L23.1724 18.7446V20.2759H1.93103V18.7446L4.54469 16.1309C4.72577 15.9499 4.82753 15.7043 4.82759 15.4483V11.5862C4.8249 10.2295 5.18029 8.89602 5.85788 7.72058C6.53546 6.54514 7.51124 5.56933 8.68666 4.8917C9.86207 4.21408 11.1955 3.85863 12.5522 3.86128C13.909 3.86392 15.241 4.22456 16.4138 4.90676V2.74883C15.4947 2.34188 14.5172 2.08251 13.5172 1.98028V0H11.5862V1.97931C9.2058 2.22159 6.99977 3.3379 5.3947 5.1124C3.78963 6.88689 2.89955 9.1935 2.89655 11.5862V15.0486L0.282897 17.6622C0.101814 17.8432 5.46844e-05 18.0888 0 18.3448V21.2414C0 21.4974 0.101724 21.743 0.282793 21.9241C0.463863 22.1052 0.709446 22.2069 0.965517 22.2069H7.72414V23.1724C7.72414 24.4528 8.23276 25.6807 9.13811 26.586C10.0435 27.4914 11.2714 28 12.5517 28C13.8321 28 15.06 27.4914 15.9653 26.586C16.8707 25.6807 17.3793 24.4528 17.3793 23.1724V22.2069H24.1379C24.394 22.2069 24.6396 22.1052 24.8207 21.9241C25.0017 21.743 25.1034 21.4974 25.1034 21.2414V18.3448C25.1034 18.0888 25.0016 17.8432 24.8206 17.6622L22.2069 15.0486ZM15.4483 23.1724C15.4483 23.9406 15.1431 24.6774 14.5999 25.2206C14.0567 25.7638 13.3199 26.069 12.5517 26.069C11.7835 26.069 11.0468 25.7638 10.5036 25.2206C9.96034 24.6774 9.65517 23.9406 9.65517 23.1724V22.2069H15.4483V23.1724Z"
              fill="#0060FF"
            />
            <path
              d="M22.2068 10.6206C24.3398 10.6206 26.0689 8.89152 26.0689 6.75855C26.0689 4.62559 24.3398 2.89648 22.2068 2.89648C20.0738 2.89648 18.3447 4.62559 18.3447 6.75855C18.3447 8.89152 20.0738 10.6206 22.2068 10.6206Z"
              fill="#FF5959"
            />
          </svg>
        </div>
        {/* Profile */}

        <Menu as="div" className="relative inline-block text-left">
          <div>
            <Menu.Button className="flex justify-between items-center gap-8 cursor-pointer bg-light dark:bg-[#131313] px-5 py-3 rounded-lg h-[59px]">
              <div className="flex items-center gap-3">
                <Image
                  src={"/images/pro_pic.png"}
                  alt="profile"
                  width={45}
                  height={45}
                />
                <div className="flex flex-col">
                  <h2 className="font-semibold text-[13px]">Andy Warhol</h2>
                  <p className="text-[#5E6E78] text-[11px] font-medium">
                    andywarhol@mail.com
                  </p>
                </div>
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="5"
                height="20"
                viewBox="0 0 5 20"
                fill="none">
                <path
                  d="M4.53259 17.3748C4.53259 17.9759 4.29382 18.5523 3.8688 18.9773C3.44379 19.4023 2.86735 19.6411 2.26629 19.6411C1.66523 19.6411 1.08879 19.4023 0.663781 18.9773C0.238769 18.5523 -7.27897e-08 17.9759 -9.90628e-08 17.3748C-1.25336e-07 16.7738 0.238769 16.1973 0.663781 15.7723C1.08879 15.3473 1.66523 15.1085 2.26629 15.1085C2.86735 15.1085 3.44379 15.3473 3.8688 15.7723C4.29382 16.1973 4.53259 16.7738 4.53259 17.3748ZM4.53259 9.82051C4.53259 10.4216 4.29382 10.998 3.8688 11.423C3.44379 11.848 2.86735 12.0868 2.26629 12.0868C1.66523 12.0868 1.08879 11.848 0.663781 11.423C0.238769 10.998 -4.02999e-07 10.4216 -4.29272e-07 9.82051C-4.55545e-07 9.21945 0.238769 8.64301 0.663781 8.218C1.08879 7.79299 1.66523 7.55422 2.26629 7.55422C2.86735 7.55422 3.44379 7.79299 3.8688 8.218C4.29382 8.64301 4.53259 9.21945 4.53259 9.82051ZM4.53258 2.2662C4.53258 2.86726 4.29382 3.4437 3.8688 3.86871C3.44379 4.29373 2.86735 4.5325 2.26629 4.5325C1.66523 4.5325 1.08879 4.29373 0.663781 3.86871C0.238768 3.4437 -7.33208e-07 2.86726 -7.59481e-07 2.2662C-7.85755e-07 1.66514 0.238768 1.08871 0.663781 0.663692C1.08879 0.23868 1.66523 -8.97182e-05 2.26629 -8.97444e-05C2.86735 -8.97707e-05 3.44379 0.23868 3.8688 0.663692C4.29382 1.0887 4.53258 1.66514 4.53258 2.2662Z"
                  fill="#A2A7B4"
                />
              </svg>
            </Menu.Button>
          </div>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95">
            <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
              <div className="px-1 py-1">
                <Menu.Item>
                  {({ active }) => (
                    <button
                      className={`${
                        active ? "bg-violet-500 text-white" : "text-gray-900"
                      } group flex w-full items-center rounded-md px-2 py-2 text-sm`}>
                      My Profile
                    </button>
                  )}
                </Menu.Item>
              </div>
              <div className="px-1 py-1 ">
                <Menu.Item>
                  {({ active }) => (
                    <button
                      className={`${
                        active ? "bg-violet-500 text-white" : "text-gray-900"
                      } group flex w-full items-center rounded-md px-2 py-2 text-sm`}>
                      Settings
                    </button>
                  )}
                </Menu.Item>
              </div>
              <div className="px-1 py-1">
                <Menu.Item>
                  {({ active }) => (
                    <button
                      className={`${
                        active ? "bg-violet-500 text-white" : "text-gray-900"
                      } group flex w-full items-center rounded-md px-2 py-2 text-sm`}>
                      Log Out
                    </button>
                  )}
                </Menu.Item>
              </div>
            </Menu.Items>
          </Transition>
        </Menu>
      </div>
    </div>
  );
};

export default Navbar;
