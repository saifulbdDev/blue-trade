"use client";

import React from "react";
import BTCUSDTChart from "./BTCUSDTChart";

export default function Chart() {
  return (
    <div className="bg-white dark:bg-[#1C1C25] flex flex-col  md:w-3/5 rounded-[15px]  p-4">
      <div className="sm:flex justify-between items-start">
        <div className="flex justify-between w-1/3">
          <div className="flex flex-col">
            <h1 className="text-xl font-bold">BTCUSDT</h1>
            <p>Bitcoin</p>
          </div>
          <div className="flex flex-col">
            <h1 className="font-bold">$23,738</h1>
            <p>+23.6%</p>
          </div>
        </div>

        <div className="flex gap-4">
          <a
            className="bg-gray-100 dark:bg-dark text-primary rounded-md font-bold text-sm p-2"
            href="#">
            1H
          </a>
          <a
            className="bg-gray-100 dark:bg-[#262C3038] rounded-md font-bold text-sm p-2"
            href="#">
            3H
          </a>
          <a
            className="bg-gray-100 dark:bg-[#262C3038] rounded-md font-bold text-sm p-2"
            href="#">
            5H
          </a>
          <a
            className="bg-gray-100 dark:bg-[#262C3038] rounded-md font-bold text-sm p-2"
            href="#">
            1D
          </a>
          <a
            className="bg-gray-100 dark:bg-[#262C3038] rounded-md font-bold text-sm p-2"
            href="#">
            1W
          </a>
          <a
            className="bg-gray-100 dark:bg-[#262C3038] rounded-md font-bold text-sm p-2"
            href="#">
            1M
          </a>
        </div>
      </div>
      <div className="w-full pt-8">
        <BTCUSDTChart />
      </div>
    </div>
  );
}
