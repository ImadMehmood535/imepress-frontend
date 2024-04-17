import React from "react";
import { calculateDiscount, convertor } from "../../utils/currencyConvertor";

const PriceAndCode = ({ currentCurrency, item }) => {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <p className="text-[#DB4444] font-normal uppercase">
        {currentCurrency?.countryCode} {convertor(item, currentCurrency)}
      </p>
      {item?.discount > 0 && (
        <span className="line-through text-[#A0A0A0] uppercase text-sm">
          {currentCurrency?.countryCode}{" "}
          {calculateDiscount(item, currentCurrency)}
        </span>
      )}
    </div>
  );
};

export default PriceAndCode;
