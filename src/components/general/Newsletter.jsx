import React from "react";

const Newsletter = () => {
  return (
    <div className="Newsletter py-12">
      <div className="container w-full px-5 xl:w-[80%] mx-auto">
        <h2 className="text-center text-3xl md:text-4xl mb-8">
          Subscribe To Save 10%
        </h2>
        <form action="#">
          <div className="items-center mx-auto mb-3 space-y-4  sm:flex sm:space-y-0 max-w-[495px]">
            <div className="relative w-full">
              <label
                htmlFor="email"
                className="hidden mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Email address
              </label>
              <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none"></div>
              <input
                className="block py-3 px-5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-[#E5E5E5] sm:rounded-none sm:rounded-l-lg focus:ring-primary-500 focus:border-primary-500 focus:border-r-0"
                placeholder="Enter your email"
                type="email"
                id="email"
                required=""
              />
            </div>
            <div>
              <button
                type="submit"
                className="py-3 px-5 w-full text-sm font-medium text-center text-white rounded-lg border cursor-pointer bg-[#121212]  sm:rounded-none sm:rounded-r-lg border-[#121212] uppercase"
              >
                Subscribe
              </button>
            </div>
          </div>
         
        </form>
      </div>
    </div>
  );
};

export default Newsletter;
