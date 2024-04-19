import React from "react";

export default function Tokenomics() {
  return (
    <section className="p-6 dark:bg-gray-100 dark:text-gray-800">
      <div className="container mx-auto">
        <h2 className="text-5xl font-bold text-center dark:text-gray-900">
          TOKENOMICS
        </h2>
        <div className="grid gap-6 my-16 lg:grid-cols-3">
          <div className="flex flex-col p-8 space-y-4 rounded-md dark:bg-gray-50">
            <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 text-xl font-bold rounded-full dark:bg-violet-600 dark:text-gray-50">
              1
            </div>
            <p className="text-2xl font-semibold">TOTAL SUPPLY : 1 BILLION</p>
          </div>
          <div className="flex flex-col p-8 space-y-4 rounded-md dark:bg-gray-50">
            <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 text-xl font-bold rounded-full dark:bg-violet-600 dark:text-gray-50">
              2
            </div>
            <p className="text-2xl font-semibold">80% LP</p>
            <p className="text-2xl font-semibold">10% COMMUNITY</p>
            <p className="text-2xl font-semibold">10% DEV</p>
            <p className="text-2xl font-semibold">10% MARKETING</p>
          </div>
          <div className="flex flex-col p-8 space-y-4 rounded-md dark:bg-gray-50">
            <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 text-xl font-bold rounded-full dark:bg-violet-600 dark:text-gray-50">
              3
            </div>
            <p className="text-2xl font-semibold">NO PRESALE</p>
            <p className="text-2xl font-semibold"> LP LOCKED</p>
          </div>
        </div>
      </div>
    </section>
  );
}