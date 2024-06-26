import { Button } from "@nextui-org/react";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { errorToast, successToast } from "../../hooks/useToast";
import { API } from "../../api";
import * as yup from "yup";
import { yupResolver } from '@hookform/resolvers/yup';
const schema = yup.object().shape({
  email: yup.string().email("Invalid email format").required("Email is required")
});

const Newsletter = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  });
  const [loading, setLoading] = useState(false);


  const onSubmit = async (data) => {
    setLoading(true);
    try {
      const response = await API.registerNewsLetter(data);
      setLoading(false);
      reset();
      successToast(response?.data?.message);
    } catch (error) {
      setLoading(false);
      errorToast(error, "Can not Subscribe at the moment");
    }
  };

  return (
    <div className="Newsletter py-12">
      <div className="container w-full px-5 xl:w-[80%] mx-auto">
        <h2 className="text-center text-3xl md:text-4xl mb-8 font-semibold">
          Subscribe To Save 10%
        </h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="items-center mx-auto mb-3 space-y-4 sm:flex sm:space-y-0 max-w-[495px]">
            <div className="relative w-full h-12">
              <label
                htmlFor="email"
                className="hidden mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Email address
              </label>
              <input
                className={`block h-full px-5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border ${errors.email ? "border-red-500" : "border-[#E5E5E5]"} sm:rounded-none sm:rounded-l-lg focus:ring-primary-500 focus:border-primary-500 focus:border-r-0`}
                placeholder="Enter your email"
                type="text"
                id="email"
                {...register("email")}
              />
              {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
            </div>
            <div>
              <Button
                type="submit"
                isLoading={loading}
                className="h-12 px-5 w-full text-sm font-medium text-center text-white rounded-lg border cursor-pointer bg-[#121212] sm:rounded-none sm:rounded-r-lg border-[#121212] uppercase"
              >
                Subscribe
              </Button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Newsletter;
