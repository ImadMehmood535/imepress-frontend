import React from "react";
import { TiArrowBack } from "react-icons/ti";
import { FaTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const WishlistComponent = ({ product }) => {
  return (
    <div className="Wishlistdata">
      <div className="container w-full px-5 xl:w-[80%] mx-auto">
        <div className="flex justify-between flex-col md:flex-row items-start">
          <div className="w-full bg-white">
            <div className="flex mb-5 pb-5 border-b-1">
              <h3 className="font-bold text-xl capitalize w-2/5">Products</h3>
            </div>

            {product?.map((item, index) => (
              <div
                key={index}
                className="hover:bg-gray-100 py-4 px-4 border-b-1 -mx-1"
              >
                <div className="flex flex-wrap flex-col sm:flex-row items-start sm:items-center">
                  <div className="flex w-full sm:w-4/5">
                    <div className="w-36">
                      <img
                        src={item?.image}
                        alt={item?.name}
                        width={100}
                        height={100}
                        className="min-h-[100px]"
                      />
                    </div>
                    <div className="flex flex-col  ml-4 flex-grow">
                      <span className="font-bold text-base mb-3">
                        <Link to={"/"}>{item?.name}</Link>
                      </span>
                      <span className="text-[#A0A0A0] font-medium text-sm mb-3">
                        {item?.brand}
                      </span>
                    </div>
                  </div>


                  <div className="flex w-full sm:w-1/5 px-5 sm:px-0 my-3 sm:justify-center">

                    <div
                      // onClick={() => removeFromCart(item?.id)}
                      className="font-semibold text-[#121212] hover:text-red-500 text-2xl cursor-pointer"
                    >
                      <FaTrashAlt />
                    </div>
                  </div>
                </div>
              </div>
            ))}

            <div className="flex flex-wrap items-center justify-between mt-5">
              <Link
                href="/sale"
                className="flex font-semibold text-sm bg-[#121212] text-white py-3 px-6 rounded-lg items-center gap-2"
              >
                <TiArrowBack className="text-lg" />
                Back To Shop
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WishlistComponent;
