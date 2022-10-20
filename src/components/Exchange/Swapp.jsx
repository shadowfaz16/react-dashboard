import React from "react";

const Swapp = () => {
  return (
    <div className="mt-1">
      <div className="relative rounded-md shadow-sm">
        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
          <span className="text-gray-500">$</span>
        </div>
        <input
          type="text"
          name="price"
          id="price"
          className="block w-full rounded-md border-gray-300 pl-8 pr-12 py-2 focus:border-indigo-500 focus:ring-indigo-500"
          placeholder="0.00"
        />
        <div className="absolute inset-y-0 right-0 flex items-center">
          <label for="currency" className="sr-only">
            Currency
          </label>
          <select
            id="currency"
            name="currency"
            className="h-full rounded-md border-transparent bg-transparent py-0 pl-2 pr-7 text-gray-500 focus:border-indigo-500 focus:ring-indigo-500"
          >
            <option>USDT</option>
            <option>MXN</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Swapp;
