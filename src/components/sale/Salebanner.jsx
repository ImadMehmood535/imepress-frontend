
import React from "react";
import { sale_banner } from "../../assets";

const Salebanner = () => {
  return (
    <div className="Innerbanner ">
      <div className="w-full overflow-hidden bg-gradient-to-r from-[#E4AD20] to-[#FAF187] h-[100%] py-6 text-center">
        <img
          src={sale_banner}
          alt="sale_banner"
          width={400}
          height={4000}
          className="text-center mx-auto"
        />
      </div>
    </div>
  );
};

export default Salebanner;
