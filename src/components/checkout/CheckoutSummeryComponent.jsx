import React from "react";
import { Header_logo } from "../../assets";
import { Link } from "react-router-dom";

const CheckoutSummeryComponent = () => {
  return (
    <div>
      <div
        id="checkout-summary"
        className=" my-3 w-full px-4 py-4 shadow-lg  rounded-xl"
      >
        <h1 className="font-semibold text-2xl border-b pb-8">Order Summary</h1>
        
        {/* cart item start */}

        <div className="cart-item flex justify-between flex-col md:flex-row">
          <div className="w-full">
            <div className=" py-4 ">
              <div className="flex flex-wrap flex-col sm:flex-row items-start sm:items-center">
                <div className="flex w-full sm:w-9/12">
                  <Link to={`/shop`} className="w-36">
                    <img
                      src={Header_logo}
                      alt={Header_logo}
                      width={100}
                      height={100}
                      className="min-h-[100px]"
                    />
                  </Link>
                  <div className="flex flex-col  ml-4 flex-grow justify-center">
                    <span className="font-bold text-base mb-3">asdsad</span>
                    <div className="font-semibold text-[#121212] hover:text-red-500 text-xs cursor-pointer">
                      Remove
                    </div>
                  </div>
                </div>

                <div className="flex w-full sm:w-3/12 px-5 sm:px-0 my-3 sm:justify-center">
                  <div className="block sm:hidden mr-2">
                    <b>Total Price</b>
                  </div>
                  <h4 className="text-center font-bold text-base text-[#121212]">
                    <span className="price">$123</span>
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* cart item end */}

        <div className="flex justify-between mt-10 mb-5">
          <span className="font-semibold text-sm uppercase">Shipping</span>
          <span className="font-semibold text-sm">Free</span>
        </div>

        <div className="border-t mt-8">
          <div className="flex font-semibold justify-between py-6 text-sm uppercase">
            <span>Subtotal</span>
            <span>$123</span>
          </div>

          <button className="bg-[#121212] py-3 px-6 rounded-lg font-semibold hover:bg-[#164A8C] transition text-sm mb-3 text-white uppercase w-full border">
            Checkout
          </button>
          <button className=" font-semibold transition text-sm text-[#121212] uppercase w-full ">
            Or continue shopping
          </button>
        </div>
      </div>
    </div>
  );
};

export default CheckoutSummeryComponent;
