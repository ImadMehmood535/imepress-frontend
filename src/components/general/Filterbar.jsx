import { RiArrowDropDownLine } from "react-icons/ri";
import React, { useState } from "react";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
  Checkbox,
} from "@nextui-org/react";
import { Filter, Grid_2, Grid_3, Grid_4 } from "../../assets"

const Filterbar = ({
  setOption,
  option,
  setIsChecked,
  isChecked,
  sorting,
  setSorting,
  showCheck,
  setShowSideBar,
  showSideBar
}) => {
  
  const handleMenuToggle = () => {
    setShowSideBar(!showSideBar);
  };

  const [selectedKeys, setSelectedKeys] = React.useState(
    new Set([`${sorting}`])
  );

  const selectedValue = React.useMemo(
    () => Array.from(selectedKeys).join(", ").replaceAll("_", " "),
    [selectedKeys]
  );

  const handleChange = () => {
    setIsChecked((prevState) => !prevState);
  };
  return (
    <div className="Filterbar ">
      <div className=" w-full ">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div className=" flex flex-wrap gap-3 flex-row">
            {!showCheck &&
              <button
                id="filter"
                onClick={handleMenuToggle}
                className="text-black font-medium text-lg px-0 sm:px-5 py-2.5 text-center inline-flex items-center"
              >
                <img
                  src={Filter}
                  alt="Filter"
                  width={30}
                  height={24}
                  className=" pr-1"
                />
                Filter{" "}
              </button>

            }
            <div className="view-list flex gap-3">
              <Button
                id="filter"
                className={`text-black font-medium text-lg px-0 py-0 bg-transparent text-center inline-flex items-center  min-w-9 ${option === 2 ? "active" : ""
                  }`}
                onClick={() => setOption(2)}
              >
                <img
                  src={Grid_2}
                  alt="Grid_2"
                  width={30}
                  className=" pr-1 w-auto h-full"
                />
              </Button>
              <Button
                id="filter"
                className={`text-black font-medium text-lg px-0 py-0 bg-transparent text-center inline-flex items-center  min-w-9 ${option === 3 ? "active" : ""
                  }`}
                type="button"
              >
                <img
                  src={Grid_3}
                  alt="Grid_3"
                  width={30}
                  onClick={() => setOption(3)}
                  height={24}
                  className=" pr-1 w-auto h-full"
                />
              </Button>
              <Button
                id="filter"
                className={`text-black font-medium text-lg px-0 py-0 bg-transparent text-center inline-flex items-center  min-w-9 ${option === 4 ? "active" : ""
                  }`}
                type="button"
              >
                <img
                  src={Grid_4}
                  alt="Grid_4"
                  width={30}
                  onClick={() => setOption(4)}
                  className=" pr-1 w-auto h-full"
                />
              </Button>
            </div>
            {showCheck &&
              <div className="flex items-center">
                <Checkbox
                  id="checked-checkbox"
                  type="checkbox"
                  onChange={handleChange}
                  color="warning"
                  className=" text-blue-600  border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 "
                >
                  {`Show only products on sale`}
                </Checkbox>
              </div>

            }
          </div>
          <div className="">
            <Dropdown>
              <DropdownTrigger>
                <Button
                  variant="bordered"
                  className="capitalize rounded-md py-1 px-4 border-gray-300 w-52 flex flex-wrap justify-between"
                >
                  {selectedValue}
                  <RiArrowDropDownLine />
                </Button>
              </DropdownTrigger>
              <DropdownMenu
                aria-label="Single selection example"
                variant="flat"
                disallowEmptySelection
                selectionMode="single"
                selectedKeys={selectedKeys}
                onSelectionChange={(keys) => {
                  setSelectedKeys(keys);
                  setSorting(Array.from(keys)[0]);
                }}
              >
                <DropdownItem key="a to z">A - Z</DropdownItem>
                <DropdownItem key="z to a">Z - A</DropdownItem>

              </DropdownMenu>
            </Dropdown>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filterbar;
