// CheckoutFormComponent.jsx
import React from "react";
import { useForm } from "react-hook-form";

const CheckoutFormComponent = ({ onFormChange }) => {
  const { register } = useForm();

  const handleChange = (e) => {
    const { name, value } = e.target;
    onFormChange({ [name]: value });
  };

  return (
    <div className="form-area">
      <div className="w-full mx-auto">
        <div className="bg-white p-4 md:p-8 rounded-lg shadow-md">
          <h1 className="text-2xl font-bold mb-5">Checkout</h1>

          <div className="mb-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="first_name" className="block mb-1">
                  First Name
                </label>
                <input
                  {...register("firstName")}
                  type="text"
                  id="first_name"
                  name="firstName"
                  className="w-full bg-white rounded border border-gray-300 focus:border-themePrimary-0 focus:ring-2 focus:ring-blue-500-200 text-base outline-none text-gray-700 py-1 px-3 leading-10 transition-colors duration-200 ease-in-out"
                  onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor="last_name" className="block mb-1">
                  Last Name
                </label>
                <input
                  {...register("lastName")}
                  type="text"
                  id="last_name"
                  name="lastName"
                  className="w-full bg-white rounded border border-gray-300 focus:border-themePrimary-0 focus:ring-2 focus:ring-blue-500-200 text-base outline-none text-gray-700 py-1 px-3 leading-10 transition-colors duration-200 ease-in-out"
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="mt-4">
              <label htmlFor="address" className="block  mb-1">
                Address
              </label>
              <input
                {...register("address")} // Register the input field with React Hook Form
                type="text"
                id="address"
                className="w-full bg-white rounded border border-gray-300 focus:border-themePrimary-0 focus:ring-2 focus:ring-blue-500-200 text-base outline-none text-gray-700 py-1 px-3 leading-10 transition-colors duration-200 ease-in-out"
                onChange={handleChange}
                required
              />
            </div>
            <div className="mt-4">
              <label htmlFor="city" className="block  mb-1">
                City
              </label>
              <input
                {...register("city")} // Register the input field with React Hook Form
                type="text"
                id="city"
                className="w-full bg-white rounded border border-gray-300 focus:border-themePrimary-0 focus:ring-2 focus:ring-blue-500-200 text-base outline-none text-gray-700 py-1 px-3 leading-10 transition-colors duration-200 ease-in-out"
                onChange={handleChange}
              />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
              <div>
                <label htmlFor="state" className="block  mb-1">
                  State
                </label>
                <input
                  {...register("state")} // Register the input field with React Hook Form
                  type="text"
                  id="state"
                  className="w-full bg-white rounded border border-gray-300 focus:border-themePrimary-0 focus:ring-2 focus:ring-blue-500-200 text-base outline-none text-gray-700 py-1 px-3 leading-10 transition-colors duration-200 ease-in-out"
                  onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor="zip" className="block  mb-1">
                  ZIP Code
                </label>
                <input
                  {...register("zip")} // Register the input field with React Hook Form
                  type="text"
                  id="zip"
                  className="w-full bg-white rounded border border-gray-300 focus:border-themePrimary-0 focus:ring-2 focus:ring-blue-500-200 text-base outline-none text-gray-700 py-1 px-3 leading-10 transition-colors duration-200 ease-in-out"
                  onChange={handleChange}
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
