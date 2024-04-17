import React from "react";
import CheckoutSummaryItemComponent from "./CheckoutSummaryItemComponent";
import CheckoutFormComponent from "./CheckoutFormComponent";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { errorToast, successToast } from "../../hooks/useToast";
import { API } from "../../api";

const CheckoutComponent = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    console.log(data);
    try {
      const response = await API.checkoutForm(data);
      successToast(response?.data?.message);
      navigate("/");
    } catch (error) {
      errorToast(error, "Form Not Send Please Try Again!");
    }
  };
  return (
    <div className="CheckoutComponent">
      <div className="Checkout-body pt-24 py-12">
        <div className="container w-full px-5 xl:w-[80%] mx-auto">
          <form onSubmit={handleSubmit(onSubmit)} className="w-full">
            <div className="flex justify-between flex-col md:flex-row gap-5">
              <div className="w-full md:w-8/12 bg-white">
                <CheckoutFormComponent errors={errors} register={register} />
              </div>
              <div className=" w-full md:w-4/12 ">
                <CheckoutSummaryItemComponent />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CheckoutComponent;
