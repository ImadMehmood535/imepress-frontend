import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import ProductCart from "./ProductCart";

const DailySale = ({ data, title, exp }) => {
  return (
    <div className="DailySale ">
      <div className="container w-full px-5 xl:w-[80%] mx-auto">
        {title && (
          <h2 className="text-center text-3xl md:text-4xl mb-4">{title}</h2>
        )}
        {exp && <p className="text-center text-[#A0A0A0] text-sm">{exp}</p>}

        <div className="slider-area mt-8">
          <Swiper
            cssMode={true}
            navigation={true}
            slidesPerView={6}
            spaceBetween={30}
            breakpoints={{
              "@0.00": {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              "@0.75": {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              "@1.00": {
                slidesPerView: 3,
                spaceBetween: 20,
              },
              "@1.50": {
                slidesPerView: 4,
                spaceBetween: 20,
              },
            }}
            modules={[Navigation]}
            className="DailySale-slider"
          >
            {data?.map((item, index) => (
              <SwiperSlide
                key={index}
                className="max-h-[600px] relative group/product transition cursor-pointer"
              >
                <ProductCart item={item} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default DailySale;
