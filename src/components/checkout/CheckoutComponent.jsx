// CheckoutComponent.jsx
import React, { useState, useEffect } from "react";
import InnerpageHeader from "../general/InnerpageHeader";
import CheckoutSummaryItemComponent from "./CheckoutSummaryItemComponent";
import CheckoutFormComponent from "./CheckoutFormComponent";

const CheckoutComponent = () => {
  const [formData, setFormData] = useState({});

  const handleFormChange = (data) => {
    setFormData((prevData) => ({ ...prevData, ...data }));
  };

  useEffect(() => {
    console.log(formData); // Log the formData whenever it changes
  }, [formData]);

  return (
    <div className="CheckoutComponent">
      <InnerpageHeader pageTitle={"CheckOut"} breadcrums={"CheckOut"} />
      <div className="Checkout-body pt-24 py-12">
        <div className="container w-full px-5 xl:w-[80%] mx-auto">
          <div className="flex justify-between flex-col md:flex-row">
            <div className="w-full md:w-4/6 bg-white">
              <CheckoutFormComponent onFormChange={handleFormChange} />
            </div>
            <div className="my-3 w-full md:w-3/12 px-4 py-4 ">
              <CheckoutSummaryItemComponent formData={formData} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutComponent;
