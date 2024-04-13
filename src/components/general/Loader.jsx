import React from "react";
import { MutatingDots } from "react-loader-spinner";

const Loader = () => {
  return (

    <div className=" flex justify-center items-center w-full h-[50vh]">
      <MutatingDots
        visible={true}
        height="100"  
        width="100"
        color="#164A8C"
        secondaryColor="#EBC964"
        radius="12.5"
        ariaLabel="mutating-dots-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />

    </div>
  );
};

export default Loader;
