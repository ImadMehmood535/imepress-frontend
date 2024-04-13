import React, { useState } from "react";
import { API } from "../api";
import { useEffect } from "react";
import { errorToast } from "../hooks/useToast"
import Salebanner from "./sale/Salebanner";
import Filterbar from "./general/Filterbar"
import Productarea from "./general/Productarea"
import Newsletter from "./general/Newsletter";


const SaleComponent = () => {
  const [option, setOption] = useState(4);
  const [isChecked, setIsChecked] = useState(false);
  const [sorting, setSorting] = useState("All");
  const [salesData, setSalesData] = useState(null);

  const getData = async () => {
    try {
      const response = await API.getProductsQueryParams("isSale");
      setSalesData(response?.data?.data);
    } catch (error) {
      errorToast(error, "Can not fetch sale products");
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="sale">
      <Salebanner />
      <div className="shop-area py-24 container w-full px-5 xl:w-[80%] mx-auto overflow-x-hidden">

        <Filterbar
          setOption={setOption}
          option={option}
          setIsChecked={setIsChecked}
          isChecked={isChecked}
          sorting={sorting}
          setSorting={setSorting}
        />

        {salesData && (
          <Productarea
            data={salesData}
            option={option}
            isChecked={isChecked}
            sorting={sorting}
          />
        )}
      </div>
      <Newsletter />
    </div>
  );
};

export default SaleComponent;
