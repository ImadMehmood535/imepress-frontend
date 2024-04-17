import React, { useState } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import { Checkbox, CheckboxGroup, Slider } from "@nextui-org/react";
import useCurrencyStore from "../store/currency";

const Shopsidebar = ({
  brands,
  categoryitem,
  setSelectedBrands,
  setSelctedCategories,
  setSelectedPrice,
  selectedPrice,
  setSelctedSubCategpries,
  setPageTitle,
  id,
}) => {
  const [openCategories, setOpenCategories] = useState(id ? [id] : []);
  const [isOpen, setIsOpen] = useState(true);
  const [isOpenBrand, setIsOpenBrand] = useState(true);
  const [isOpenPrice, setIsOpenPrice] = useState(true);
  const { currentCurrency } = useCurrencyStore();

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  const toggleDropdownBrand = () => {
    setIsOpenBrand(!isOpenBrand);
  };
  const toggleDropdownPrice = () => {
    setIsOpenPrice(!isOpenPrice);
  };

  const toggleCategory = (categoryId) => {
    if (openCategories.includes(categoryId)) {
      setOpenCategories(openCategories.filter((id) => id !== categoryId));
    } else {
      setOpenCategories([...openCategories, categoryId]);
    }
  };

  const isCategoryOpen = (categoryId) => {
    return openCategories.includes(categoryId);
  };

  const handleCategorySelect = (category) => {
    toggleCategory(category?.id);
    setSelctedSubCategpries([]);
    setOpenCategories([category?.id]);
    setSelctedCategories([category?.id]);
    setPageTitle(category?.name);
  };

  return (
    <div className="Shopsidebar z-50 ">
      <div className="w-full py-6 pb-8 px-4 sm:px-0 bg-white sm:h-auto max-h-full">
        <div className="relative transition-all mb-4">
          <button
            type="button"
            className="flex flex-wrap justify-between items-center w-full text-[#121212] font-bold text-xl"
            onClick={toggleDropdown}
          >
            Products Type
            {isOpen ? <FaAngleDown /> : <FaAngleUp />}
          </button>

          {isOpen && (
            <div className="p-4 max-w-lg mx-auto">
              {categoryitem?.map((category) => (
                <div key={category?.id}>
                  <div
                    className="cursor-pointer flex justify-between"
                    onClick={() => handleCategorySelect(category)}
                  >
                    {category.name}
                    {isCategoryOpen(category?.id) && (
                      <div className="flex gap-3 items-center">
                        {" "}
                        <p>({category?.subCategoriesQuanitity})</p>{" "}
                        <FaAngleUp />{" "}
                      </div>
                    )}
                    {!isCategoryOpen(category?.id) && (
                      <div className="flex gap-3 items-center">
                        {" "}
                        <p>({category?.subCategoriesQuanitity})</p>{" "}
                        <FaAngleUp />{" "}
                      </div>
                    )}
                  </div>
                  {isCategoryOpen(category.id) && (
                    <div className="flex gap-4 flex-col">
                      <CheckboxGroup
                        key={category?.id}
                        color="warning"
                        onChange={setSelctedSubCategpries}
                      >
                        {category?.subCategories?.map((item, index) => (
                          <Checkbox
                            key={item?.id}
                            value={item?.id}
                            className=""
                          >
                            {item?.name}
                          </Checkbox>
                        ))}
                      </CheckboxGroup>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
        <div className="relative transition-all mb-4 cursor-pointer">
          <h4
            onClick={toggleDropdownPrice}
            className="flex flex-wrap justify-between items-center w-full text-[#121212] font-bold text-xl mb-4"
          >
            Price Range
            {isOpenPrice ? <FaAngleDown /> : <FaAngleUp />}
          </h4>

          {isOpenPrice && (
            <div className="flex flex-col gap-2 w-full h-full max-w-md items-start justify-center">
              <Slider
                size="sm"
                label="Range"
                formatOptions={{
                  style: "currency",
                  currency: currentCurrency?.countryCode,
                }}
                step={10}
                maxValue={1000}
                minValue={0}
                value={selectedPrice}
                onChange={setSelectedPrice}
                classNames={{
                  base: "max-w-lg ",
                  filler: "bg-[#121212]",
                  labelWrapper: "mb-2",
                  label: "font-medium text-default-700 text-medium",
                  value: "font-medium text-default-500 text-small",
                  thumb: [
                    "transition-size",
                    "bg-[#121212]",
                    "data-[dragging=true]:shadow-lg data-[dragging=true]:shadow-black/20",
                    "data-[dragging=true]:w-7 data-[dragging=true]:h-7 data-[dragging=true]:after:h-6 data-[dragging=true]:after:w-6",
                  ],
                  step: "data-[in-range=true]:bg-black/30 dark:data-[in-range=true]:bg-white/50",
                }}
              />
            </div>
          )}
        </div>

        <div
          onClick={toggleDropdownBrand}
          className="relative transition-all mb-4 cursor-pointer"
        >
          <h4 className="flex flex-wrap justify-between items-center w-full text-[#121212] font-bold text-xl mb-4">
            Brands
            {isOpenBrand ? <FaAngleDown /> : <FaAngleUp />}
          </h4>

          {isOpenBrand && (
            <div className="flex gap-4 flex-col">
              <CheckboxGroup color="warning" onValueChange={setSelectedBrands}>
                {brands?.map((brand, index) => (
                  <Checkbox key={index} value={brand?.id} className="">
                    {brand?.name}
                  </Checkbox>
                ))}
              </CheckboxGroup>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Shopsidebar;
