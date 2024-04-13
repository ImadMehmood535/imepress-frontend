import React from "react";
import { IoSearch } from "react-icons/io5";

const Searcharea = () => {
  return (
    <div className="searcharea">
      <form className="w-full md:w-8/12">
        <label
          htmlFor="default-search"
          className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
        >
          Search
        </label>
        <div className="relative">
          
          <input
            type="search"
            id="default-search"
            className="block w-full p-4  text-sm text-gray-900 border border-gray-300 rounded-[7px] bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search Mockups, Logos..."
            required
          />
          <button
            type="submit"
            className="text-black absolute end-2.5 bottom-2.5   focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2  dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            <IoSearch className="text-black" />
          </button>
        </div>
      </form>
    </div>
  );
};

export default Searcharea;
