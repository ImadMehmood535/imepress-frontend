import React, { useEffect, useState } from "react";
import { Header_logo } from "../../assets";
import { Button } from "@nextui-org/react";
import useProductStore from "../../store/products";
import NoContent from "../NoContent";
import { Link } from "react-router-dom";
import useCurrencyStore from "../../store/currency";
import { convertor } from "../../utils/currencyConvertor";

const CheckoutSummaryItemComponent = () => {
  const { products } = useProductStore();
  const { currentCurrency } = useCurrencyStore();
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    let totalPrice = 0;
    products.forEach((item) => {
      totalPrice += convertor(item, currentCurrency) * item.quantity;
    });
    setTotalPrice(totalPrice.toFixed(2));
  }, [products, currentCurrency]);

  return (
    <div>
      {products.length > 0 ? (
        <div
          id="checkout-summary"
          className="w-full px-4 py-4 shadow-lg rounded-xl"
        >
          <h1 className="font-semibold text-2xl border-b pb-8">
            Order Summary
          </h1>
          {/* cart item fetch */}

          <div className="cart-item flex justify-between flex-col ">
            {products?.map((item, index) => (
              <div className="w-full" key={index}>
                <div className="py-4 ">
                  <div className="flex flex-wrap flex-col sm:flex-row items-start sm:items-center">
                    <div className="flex w-full ">
                      <div className="w-36">
                        <Link to={`/shop/${item?.slug}`} className="w-36">
                          <img
                            src={item?.imageUrl}
                            alt={item?.name}
                            width={100}
                            height={100}
                            className="min-h-[100px]"
                          />
                        </Link>
                      </div>
                      <div className="flex flex-col ml-4 flex-grow justify-center">
                        <span className="font-bold text-base mb-3">
                          {item?.name}
                        </span>
                        <div className="block sm:hidden mr-2">
                          <b>Total Price</b>
                        </div>
                        <h4 className=" font-bold text-base text-[#121212]">
                          <span className="price">
                            {currentCurrency?.countryCode}{" "}
                            {(
                              convertor(item, currentCurrency) * item.quantity
                            ).toFixed(2)}
                          </span>
                        </h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* cart item fetch */}
          <div className="flex justify-between mt-10 mb-5">
            <span className="font-semibold text-sm uppercase">Shipping</span>
            <span className="font-semibold text-sm">Free</span>
          </div>

          <div className="border-t mt-8">
            <div className="flex font-semibold justify-between py-6 text-sm uppercase">
              <span>Total</span>
              <span>
                {currentCurrency?.countryCode} {totalPrice}
              </span>
            </div>

            <Button
              type="submit"
              className="bg-[#121212] py-3 px-6 rounded-lg font-semibold hover:bg-[#164A8C] transition text-sm mb-3 text-white uppercase w-full border"
            >
              Checkout
            </Button>
            <Link
              to={"/cart"}
              className="font-semibold transition text-sm text-center table text-[#121212] uppercase w-full "
            >
              Or get back to cart
            </Link>
          </div>
        </div>
      ) : (
        <NoContent />
      )}
    </div>
  );
};

export default CheckoutSummaryItemComponent;
