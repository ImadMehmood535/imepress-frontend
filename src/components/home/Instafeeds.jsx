import React from "react";
import { FaInstagram } from "react-icons/fa6";
import {
  instafeed1,
  instafeed2,
  instafeed3,
  instafeed4,
  instafeed5,
} from "../../assets";

const Instafeeds = () => {
  return (
    <div className="Instafeeds pt-24 py-12">
      <div className="container w-full px-5 xl:w-[80%] mx-auto">
        <h2 className="text-center text-3xl md:text-4xl mb-8 font-semibold">
          @ImepressGold On Instagram
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-5 xl:grid-cols-5 gap-2">
          <div className="feed relative flex flex-wrap items-center justify-center group/insta cursor-pointer">
            <img
              src={instafeed1}
              alt="instafeed1"
              width={450}
              height={450}
              className="w-full"
            />
            <div className="icon py-2 px-2 rounded-lg absolute mx-auto my-auto bg-white opacity-0 group-hover/insta:opacity-100 transition-all duration-500">
              <FaInstagram className="text-4xl" />
            </div>
          </div>
          <div className="feed relative flex flex-wrap items-center justify-center group/insta cursor-pointer">
            <img
              src={instafeed2}
              alt="instafeed1"
              width={450}
              height={450}
              className="w-full"
            />
            <div className="icon py-2 px-2 rounded-lg absolute mx-auto my-auto bg-white opacity-0 group-hover/insta:opacity-100 transition-all duration-500">
              <FaInstagram className="text-4xl" />
            </div>
          </div>
          <div className="feed relative flex flex-wrap items-center justify-center group/insta cursor-pointer">
            <img
              src={instafeed3}
              alt="instafeed1"
              width={450}
              height={450}
              className="w-full"
            />
            <div className="icon py-2 px-2 rounded-lg absolute mx-auto my-auto bg-white opacity-0 group-hover/insta:opacity-100 transition-all duration-500">
              <FaInstagram className="text-4xl" />
            </div>
          </div>
          <div className="feed relative flex flex-wrap items-center justify-center group/insta cursor-pointer">
            <img
              src={instafeed4}
              alt="instafeed1"
              width={450}
              height={450}
              className="w-full"
            />
            <div className="icon py-2 px-2 rounded-lg absolute mx-auto my-auto bg-white opacity-0 group-hover/insta:opacity-100 transition-all duration-500">
              <FaInstagram className="text-4xl" />
            </div>
          </div>
          <div className="feed relative flex flex-wrap items-center justify-center group/insta cursor-pointer">
            <img
              src={instafeed5}
              alt="instafeed1"
              width={450}
              height={450}
              className="w-full"
            />
            <div className="icon py-2 px-2 rounded-lg absolute mx-auto my-auto bg-white opacity-0 group-hover/insta:opacity-100 transition-all duration-500">
              <FaInstagram className="text-4xl" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Instafeeds;
