import React, { useEffect, useState } from "react";
import ProductCart from "./ProductCart";
import useCurrencyStore from "../../store/currency";

const Productarea = ({
  data,
  option,
  isChecked,
  sorting,
  selectedPrice,
  selectedBrands,
  selectedSubCategoies,
  selectedCategories,
}) => {
  const { currentCurrency } = useCurrencyStore();

  const filteredData1 = isChecked
    ? data.filter((item) => item?.tags?.sale)
    : data;

  const filteredData2 = selectedPrice
    ? filteredData1.filter(
        (item) =>
          item.price * currentCurrency?.currencyValue >= selectedPrice[0] &&
          item.price * currentCurrency?.currencyValue <= selectedPrice[1]
      )
    : filteredData1;

  const filteredData3 =
    selectedBrands && selectedBrands.length > 0
      ? filteredData2.filter((item) => selectedBrands.includes(item?.brandId))
      : filteredData2;

  const filteredData4 =
    selectedSubCategoies && selectedSubCategoies.length > 0
      ? filteredData3.filter((item) =>
          selectedSubCategoies.includes(item?.subCategoryId)
        )
      : filteredData3;

  const filteredData5 =
    selectedCategories && selectedCategories.length > 0
      ? filteredData4.filter((item) =>
          selectedCategories.includes(item?.categoryId)
        )
      : filteredData4;

  const sortedData = [...filteredData5];
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

  const [screenSize, setScreenSize] = useState(null);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 768) {
        setScreenSize("xs");
      } else {
        setScreenSize("lg");
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="Productarea z-10">
      <div className="w-full">
        <div
          className={`product_area mt-8 grid gap-4 mb-2 ${
            screenSize === "xs"
              ? "grid-cols-1"
              : option === 3
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
