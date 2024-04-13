import React from "react";
import ProductCart from "./ProductCart";

const Productarea = ({ data, option, isChecked, sorting }) => {
  const filteredData = isChecked
    ? data.filter((item) => item?.tags?.sale)
    : data;

  const sortedData = [...filteredData];

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
      <div className=" w-full">
        <div
          className={`product_area mt-8 grid gap-4 mb-2 ${
            option === 3
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
