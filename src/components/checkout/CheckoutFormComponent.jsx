import React from "react";

const CheckoutFormComponent = () => {
  return (
    <div className="form-area">
      <div className="w-full mx-auto ">
        <div className="bg-white  p-4 md:p-8 rounded-lg shadow-md ">
          <h1 className="text-2xl font-bold mb-5">
            Checkout
          </h1>

          <div className="mb-6">
           
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="first_name"
                  className="block  mb-1"
                >
                  First Name
                </label>
                <input
                  type="text"
                  id="first_name"
                  className="w-full bg-white rounded border border-gray-300 focus:border-themePrimary-0 focus:ring-2 focus:ring-blue-500-200 text-base outline-none text-gray-700 py-1 px-3 leading-10 transition-colors duration-200 ease-in-out"
                />
              </div>
              <div>
                <label htmlFor="last name" className="block  mb-1">Last Name</label>
                <input
                  type="text"
                  id="last_name"
                  className="w-full bg-white rounded border border-gray-300 focus:border-themePrimary-0 focus:ring-2 focus:ring-blue-500-200 text-base outline-none text-gray-700 py-1 px-3 leading-10 transition-colors duration-200 ease-in-out"
                />
              </div>
            </div>

            <div className="mt-4">
              <label
                htmlFor="address"
                className="block  mb-1"
              >
                Address
              </label>
              <input
                type="text"
                id="address"
                className="w-full bg-white rounded border border-gray-300 focus:border-themePrimary-0 focus:ring-2 focus:ring-blue-500-200 text-base outline-none text-gray-700 py-1 px-3 leading-10 transition-colors duration-200 ease-in-out"
              />
            </div>

            <div className="mt-4">
              <label
                htmlFor="city"
                className="block  mb-1"
              >
                City
              </label>
              <input
                type="text"
                id="city"
                className="w-full bg-white rounded border border-gray-300 focus:border-themePrimary-0 focus:ring-2 focus:ring-blue-500-200 text-base outline-none text-gray-700 py-1 px-3 leading-10 transition-colors duration-200 ease-in-out"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
              <div>
                <label
                  htmlFor="state"
                  className="block  mb-1"
                >
                  State
                </label>
                <input
                  type="text"
                  id="state"
                  className="w-full bg-white rounded border border-gray-300 focus:border-themePrimary-0 focus:ring-2 focus:ring-blue-500-200 text-base outline-none text-gray-700 py-1 px-3 leading-10 transition-colors duration-200 ease-in-out"
                />
              </div>
              <div>
                <label
                  htmlFor="zip"
                  className="block  mb-1"
                >
                  ZIP Code
                </label>
                <input
                  type="text"
                  id="zip"
                  className="w-full bg-white rounded border border-gray-300 focus:border-themePrimary-0 focus:ring-2 focus:ring-blue-500-200 text-base outline-none text-gray-700 py-1 px-3 leading-10 transition-colors duration-200 ease-in-out"
                />
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-xl font-semibold  mb-2">
              Payment Information
            </h2>
            <div className="mt-4">
              <label
                htmlFor="card_number"
                className="block  mb-1"
              >
                Card Number
              </label>
              <input
                type="text"
                id="card_number"
                className="w-full bg-white rounded border border-gray-300 focus:border-themePrimary-0 focus:ring-2 focus:ring-blue-500-200 text-base outline-none text-gray-700 py-1 px-3 leading-10 transition-colors duration-200 ease-in-out"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
              <div>
                <label
                  htmlFor="exp_date"
                  className="block  mb-1"
                >
                  Expiration Date
                </label>
                <input
                  type="text"
                  id="exp_date"
                  className="w-full bg-white rounded border border-gray-300 focus:border-themePrimary-0 focus:ring-2 focus:ring-blue-500-200 text-base outline-none text-gray-700 py-1 px-3 leading-10 transition-colors duration-200 ease-in-out"
                />
              </div>
              <div>
                <label
                  htmlFor="cvv"
                  className="block  mb-1"
                >
                  CVV
                </label>
                <input
                  type="text"
                  id="cvv"
                  className="w-full bg-white rounded border border-gray-300 focus:border-themePrimary-0 focus:ring-2 focus:ring-blue-500-200 text-base outline-none text-gray-700 py-1 px-3 leading-10 transition-colors duration-200 ease-in-out"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutFormComponent;
