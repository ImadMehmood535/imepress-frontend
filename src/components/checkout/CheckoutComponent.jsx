import React from "react";
import InnerpageHeader from "../general/InnerpageHeader";
import CheckoutFormComponent from "./CheckoutFormComponent";
import CheckoutSummeryComponent from "./CheckoutSummeryComponent";

const CheckoutComponent = () => {
  return (
    <div className="CheckoutComponent">
      <InnerpageHeader pageTitle={"CheckOut"} breadcrums={"CheckOut"} />
      <div className="Checkout-body pt-24 py-12">
        <div className="container w-full px-5 xl:w-[80%] mx-auto">
          <div className="flex justify-between flex-col md:flex-row">
            <div className="w-full md:w-4/6 bg-white">
              <CheckoutFormComponent />
            </div>
            <div className="my-3 w-full md:w-3/12 px-4 py-4 ">
              <CheckoutSummeryComponent />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutComponent;
