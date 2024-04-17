import React from "react";
import { HiBuildingLibrary } from "react-icons/hi2";
import { SlGraduation } from "react-icons/sl";
import { FaRegEye } from "react-icons/fa6";

const Vision = () => {
  return (
    <div className="Vision">
      <div className="container px-5 pt-12 pb-24 w-full xl:w-[80%] mx-auto overflow-x-hidden ">
        <div className="">
          <h2 className="sm:text-4xl text-3xl font-medium text-base-content text-left">
            Our Vision
          </h2>
          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div>
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-themeSecondry-0 text-white">
                <HiBuildingLibrary className="text-3xl" />
              </div>
              <div className="mt-5">
                <h3 className="text-lg font-medium text-gray-900">Mission</h3>
                <p className="space-y-2 leading-relaxed font-normal">
                  We aim to make the world a better place through innovation and
                  collaboration.
                </p>
              </div>
            </div>
            <div>
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-themeSecondry-0 text-white">
                <SlGraduation className="text-3xl" />
              </div>
              <div className="mt-5">
                <h3 className="text-lg font-medium text-gray-900">Values</h3>
                <p className="space-y-2 leading-relaxed  font-normal">
                  We believe in honesty, integrity, and respect for all
                  individuals.
                </p>
              </div>
            </div>
            <div>
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-themeSecondry-0 text-white">
                <FaRegEye className="text-3xl" />
              </div>
              <div className="mt-5">
                <h3 className="text-lg font-medium text-gray-900">Vision</h3>
                <p className="space-y-2 leading-relaxed  font-normal">
                  We envision a world where technology is used to solve the most
                  pressing issues facing humanity and improve people's lives.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Vision;
