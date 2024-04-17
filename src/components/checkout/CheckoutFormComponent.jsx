import React from "react";

const CheckoutFormComponent = ({ register, errors }) => {
  return (
    <div className="form-area">
      <div className="w-full mx-auto">
        <div className="bg-white p-4 md:p-8 rounded-lg  ">
          <h1 className="text-2xl font-bold mb-5">Billing Details</h1>

          <div className="mb-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="first_name" className="block mb-1">
                  First Name
                </label>
                <input
                  type="text"
                  name="firstName"
                  className={`w-full bg-white rounded border border-gray-300  focus:ring-2 focus:ring-blue-500  ${
                    errors?.firstName
                      ? "focus:border-red-800 focus:ring-red-500"
                      : "focus:border-themePrimary-0 focus:ring-blue-400"
                  } text-base outline-none text-gray-700 py-1 px-3 leading-10 transition-colors duration-200 ease-in-out`}
                  {...register("firstName", { required: true })}
                />

                {errors?.firstName && (
                  <p className="text-sm text-red-800">firstName is required</p>
                )}
              </div>
              <div>
                <label htmlFor="last_name" className="block mb-1">
                  Last Name
                </label>
                <input
                  type="text"
                  name="lastName"
                  className={`w-full bg-white rounded border border-gray-300  focus:ring-2 focus:ring-blue-500  ${
                    errors?.lastName
                      ? "focus:border-red-800 focus:ring-red-500"
                      : "focus:border-themePrimary-0 focus:ring-blue-400"
                  } text-base outline-none text-gray-700 py-1 px-3 leading-10 transition-colors duration-200 ease-in-out`}
                  {...register("lastName", { required: true })}
                />
                {errors?.lastName && (
                  <p className="text-sm text-red-800">lastName is required</p>
                )}
              </div>
            </div>
            <div className="mt-4">
              <label htmlFor="address" className="block  mb-1">
                Address
              </label>
              <input
                type="text"
                name="address"
                className={`w-full bg-white rounded border border-gray-300  focus:ring-2 focus:ring-blue-500  ${
                  errors?.address
                    ? "focus:border-red-800 focus:ring-red-500"
                    : "focus:border-themePrimary-0 focus:ring-blue-400"
                } text-base outline-none text-gray-700 py-1 px-3 leading-10 transition-colors duration-200 ease-in-out`}
                {...register("address", { required: true })}
              />
              {errors?.address && (
                <p className="text-sm text-red-800">address is required</p>
              )}
            </div>
            <div className="mt-4">
              <label htmlFor="city" className="block  mb-1">
                City
              </label>
              <input
                type="text"
                name="city"
                className={`w-full bg-white rounded border border-gray-300  focus:ring-2 focus:ring-blue-500  ${
                  errors?.city
                    ? "focus:border-red-800 focus:ring-red-500"
                    : "focus:border-themePrimary-0 focus:ring-blue-400"
                } text-base outline-none text-gray-700 py-1 px-3 leading-10 transition-colors duration-200 ease-in-out`}
                {...register("city", { required: true })}
              />
              {errors?.city && (
                <p className="text-sm text-red-800">city is required</p>
              )}
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
              <div>
                <label htmlFor="state" className="block  mb-1">
                  State
                </label>
                <input
                  {...register("state", { required: true })}
                  type="text"
                  name="state"
                  className={`w-full bg-white rounded border border-gray-300  focus:ring-2 focus:ring-blue-500  ${
                    errors?.state
                      ? "focus:border-red-800 focus:ring-red-500"
                      : "focus:border-themePrimary-0 focus:ring-blue-400"
                  } text-base outline-none text-gray-700 py-1 px-3 leading-10 transition-colors duration-200 ease-in-out`}
                  {...register("state", { required: true })}
                />
                {errors?.state && (
                  <p className="text-sm text-red-800">state is required</p>
                )}
              </div>
              <div>
                <label htmlFor="zip" className="block  mb-1">
                  ZIP Code
                </label>
                <input
                  {...register("zip", { required: true })}
                  type="text"
                  name="zip"
                  className={`w-full bg-white rounded border border-gray-300  focus:ring-2 focus:ring-blue-500  ${
                    errors?.zip
                      ? "focus:border-red-800 focus:ring-red-500"
                      : "focus:border-themePrimary-0 focus:ring-blue-400"
                  } text-base outline-none text-gray-700 py-1 px-3 leading-10 transition-colors duration-200 ease-in-out`}
                  {...register("zip", { required: true })}
                />
                {errors?.zip && (
                  <p className="text-sm text-red-800">zip is required</p>
                )}
              </div>
            </div>
          </div>
          {/* <div className="mb-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="first_name" className="block mb-1">
                  First Name
                </label>
                <input
                  {...register("firstName", { required: true })}  
                  type="text"
                  id="first_name"
                  name="firstName"
                  className={`w-full bg-white rounded border ${
                    errors.firstName ? "border-red-500" : "border-gray-300"
                  } focus:border-themePrimary-0 focus:ring-2 focus:ring-blue-500-200 text-base outline-none text-gray-700 py-1 px-3 leading-10 transition-colors duration-200 ease-in-out`}
                />

                {errors.firstName && (
                  <span className="text-red-500 text-sm">
                    First Name is required
                  </span>
                )}
              </div>
              <div>
                <label htmlFor="last_name" className="block mb-1">
                  Last Name
                </label>
                <input
                  type="text"
                  id="last_name"
                  name="lastName"
                  {...register("lastName", { required: true })}
                  className="w-full bg-white rounded border border-gray-300 focus:border-themePrimary-0 focus:ring-2 focus:ring-blue-500-200 text-base outline-none text-gray-700 py-1 px-3 leading-10 transition-colors duration-200 ease-in-out"
                />
                {errors.lastName && (
                  <span className="text-red-500 text-sm">
                    Last Name is required
                  </span>
                )}
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default CheckoutFormComponent;
