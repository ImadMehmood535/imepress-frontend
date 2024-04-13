import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const Homecateg = ({ data }) => {
  return (
    <div className="cate-slider py-4 px-4 pb-24">
      <div className="w-full  overflow-hidden">
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
              slidesPerView: 4,
              spaceBetween: 20,
            },
            "@1.50": {
              slidesPerView: 6,
              spaceBetween: 30,
            },
          }}
          modules={[Navigation]}
          className="cate-slider"
        >
          {data?.map((category, index) => (
            <SwiperSlide
              key={index}
              className="max-h-[450px] relative transition-width"
            >
              <div className="image-area">
                <img
                  src={category?.imageUrl}
                  width={500}
                  alt={category?.name}
                  height={500}
                  className="w-full h-full"
                />
              </div>
              <div className="btn-area absolute bottom-2 left-0 right-0 flex flex-wrap justify-center">
                <Link
                  to="/"
                  className=" bg-white py-2 px-2  w-auto text-center flex flex-wrap gap-3 items-center justify-between"
                >
                  <div>
                    {category?.name}
                    <span className="text-[#A0A0A0] text-sm">
                      ({category?.subCategoriesQuanitity})
                    </span>
                  </div>
                  <FaArrowRight className="" />
                </Link>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Homecateg;
