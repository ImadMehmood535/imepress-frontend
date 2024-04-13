import React, { useState } from "react";
import { FaAngleDown } from "react-icons/fa";
import { CheckboxGroup, Slider } from "@nextui-org/react";
import { Checkbox } from "@nextui-org/react";

const Shopsidebar = ({ brands, categoryitem  , setSelectedBrands , setSelectedPrice , selectedPrice}) => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  
  return (
    <div className="Shopsidebar">
      <div className="w-full py-6 pb-8">
        <div className="relative transition-all mb-4">
          <button
            type="button"
            className="flex flex-wrap justify-between items-center w-full text-[#121212] font-bold text-xl"
            onClick={toggleDropdown}
          >
            Products Type
            <FaAngleDown />
          </button>

          {isOpen && (
            <div className="p-4 max-w-lg mx-auto">
              {categoryitem?.map((category) => (
                <details key={category.id} className="mb-2">
                  <summary className="flex items-center font-bold cursor-pointer  ">
                    <span className="font-semibold">{category?.name}</span>
                    <button className="ml-auto">
                      <FaAngleDown className="svg-icon" />
                    </button>
                  </summary>
                  {category?.subCategories?.length > 0 && (
                    <ul className="ml-8 space-y-4">
                      {category?.subCategories?.map((subCategory, index) => (
                        <li key={index}>
                          {subCategory?.subCategories &&
                            subCategory?.subCategories?.length > 0 ? (
                            <details className="mb-2">
                              <summary className="bg-gray-100 p-3 rounded-lg cursor-pointer shadow">
                                <span className="font-semibold">
                                  {subCategory?.name}
                                </span>
                              </summary>
                              <div className="bg-white p-4">
                                <span className="font-semibold">
                                  Content for {subCategory?.name}
                                </span>
                              </div>
                            </details>
                          ) : (
                            <span className="font-semibold">
                              {subCategory?.name}
                            </span>
                          )}
                        </li>
                      ))}
                    </ul>
                  )}
                </details>
              ))}
            </div>
          )}
        </div>
        <div className="relative transition-all mb-8">
          <h4
            className="flex flex-wrap justify-between items-center w-full text-[#121212] font-bold text-xl mb-4"
            onClick={toggleDropdown}
          >
            Price Range
            <FaAngleDown />
          </h4>
          <div className="flex flex-col gap-2 w-full h-full max-w-md items-start justify-center">
            <Slider
              size="sm"
              label="Select a budget"
              formatOptions={{ style: "currency", currency: "USD" }}
              step={10}
              maxValue={1000}
              minValue={0}
              value={selectedPrice}
              onChange={setSelectedPrice}
              classNames={{
                base: "max-w-md",
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
        </div>
        <div className="relative transition-all mb-4">
          <h4
            className="flex flex-wrap justify-between items-center w-full text-[#121212] font-bold text-xl mb-4"
            onClick={toggleDropdown}
          >
            Brands
            <FaAngleDown />
          </h4>
          <div className="flex gap-4 flex-col">
            <CheckboxGroup
              color="success"
              onValueChange={setSelectedBrands}
            >
              {brands?.map((brand, index) => (
                <Checkbox key={index} value={brand?.id} className="">
                  {brand?.name}
                </Checkbox>
              ))}

            </CheckboxGroup>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shopsidebar;
