import React, { useState } from "react";
import InnerpageHeader from "../general/InnerpageHeader";
import { Button } from "@nextui-org/react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { API } from "../../api";
import { errorToast, successToast } from "../../hooks/useToast";

const ContactComponent = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const onSubmit = async (data) => {
    console.log(data);
    setLoading(true);
    try {
      const response = await API.contactForm(data);
      successToast(response?.data?.message);
      setLoading(false);
      navigate("/");
    } catch (error) {
      setLoading(false);
      errorToast(error, "Form Not Send Please Try Again!");
    }
  };
  return (
    <div className="contact-page">
      <InnerpageHeader pageTitle={"Contact Us"} breadcrums={"Contact Us"} />

      <div className="container px-5 py-24  flex sm:flex-nowrap flex-wrap w-full xl:w-[80%] mx-auto overflow-x-hidden ">
        <div className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
          <iframe
            width="100%"
            height="100%"
            className="absolute inset-0"
            frameBorder="0"
            title="map"
            marginHeight="0"
            marginWidth="0"
            scrolling="no"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14440.714613798018!2d55.2743764!3d25.197197!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43348a67e24b%3A0xff45e502e1ceb7e2!2sBurj%20Khalifa!5e0!3m2!1sen!2s!4v1713245963172!5m2!1sen!2s"
          ></iframe>
          <div className="bg-white relative flex flex-wrap py-6 rounded shadow-md">
            <div className="lg:w-1/2 px-6">
              <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                ADDRESS
              </h2>
              <p className="mt-1">
                Spired 828-metre skyscraper with a viewing deck, a restaurant, a
                hotel and offices.
              </p>
            </div>
            <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
              <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                EMAIL
              </h2>
              <a className="text-themePrimary-0 font-bold leading-relaxed">
                <Link
                  to="mailto:example@email.com"
                  className="cursor-pointer tracking-tighter text-[#121212] hover:border-[#A0A0A0]"
                >
                  example@email.com
                </Link>
              </a>
              <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">
                PHONE
              </h2>
              <p className="leading-relaxed">
                <Link
                  to="tel:+1 666 8888"
                  className="cursor-pointer tracking-tighter text-[#121212] hover:border-[#A0A0A0]"
                >
                  +1 666 8888
                </Link>
              </p>
            </div>
          </div>
        </div>

        <div className="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
          <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">
            Contact Us
          </h2>
          <p className="leading-relaxed mb-5 text-gray-600">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="relative mb-4">
              <label htmlFor="name" className="leading-7 text-sm text-gray-600">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className={`w-full bg-white rounded border border-gray-300  focus:ring-2 focus:ring-blue-500  ${
                  errors?.name
                    ? "focus:border-red-800 focus:ring-red-500"
                    : "focus:border-themePrimary-0 focus:ring-blue-400"
                } text-base outline-none text-gray-700 py-1 px-3 leading-10 transition-colors duration-200 ease-in-out`}
                {...register("name", { required: true })}
              />
              {errors?.name && (
                <p className="text-sm text-red-800">Name is required</p>
              )}
            </div>
            <div className="relative mb-4">
              <label
                htmlFor="email"
                className="leading-7 text-sm text-gray-600"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className={`w-full bg-white rounded border border-gray-300  focus:ring-2 focus:ring-blue-500  ${
                  errors?.email
                    ? "focus:border-red-800 focus:ring-red-500"
                    : "focus:border-themePrimary-0 focus:ring-blue-400"
                } text-base outline-none text-gray-700 py-1 px-3 leading-10 transition-colors duration-200 ease-in-out`}
                {...register("email", { required: true })}
              />
              {errors?.email && (
                <p className="text-sm text-red-800">Email Is Required</p>
              )}
            </div>
            <div className="relative mb-4">
              <label
                htmlFor="message"
                className="leading-7 text-sm text-gray-600"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                className="w-full bg-white rounded border border-gray-300 focus:border-themePrimary-0 focus:ring-2 focus:ring-blue-500-200  h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                {...register("message", { required: false })}
              ></textarea>
            </div>
            <Button
              type="submit"
              isLoading={loading}
              className="w-[100%] h-[58px] text-1xl bg-zinc-950 text-white rounded-md"
            >
              Submit
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactComponent;
