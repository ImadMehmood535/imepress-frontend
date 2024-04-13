import React from "react";
import ProductCart from "./ProductCart";

const Productarea = ({ data, option, isChecked, sorting, selectedPrice, selectedBrands }) => {
  const filteredData1 = isChecked
    ? data.filter((item) => item?.tags?.sale)
    : data;

  const filteredData2 = selectedPrice
    ? filteredData1.filter((item) => item.price >= selectedPrice[0] && item.price <= selectedPrice[1])
    : filteredData1;

  const filteredData3 = selectedBrands && selectedBrands.length > 0
    ? filteredData2.filter((item) => selectedBrands.includes(item?.brandId))
    : filteredData2;

  const sortedData = [...filteredData3];
  switch (sorting) {
    case "a to z":
      sortedData.sort((a, b) => (a.name > b.name ? 1 : -1));
      break;
    case "z to a":
      sortedData.sort((a, b) => (a.name < b.name ? 1 : -1));
      break;
    default:
      break;
  }

  return (
    <div className="Productarea">
      <div className="w-full">
        <div
          className={`product_area mt-8 grid gap-4 mb-2 ${option === 3
            ? "grid-cols-3"
            : option === 2
              ? "grid-cols-2"
              : "grid-cols-4"
          }`}
        >
          {sortedData?.map((item, index) => (
            <ProductCart item={item} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Productarea;
