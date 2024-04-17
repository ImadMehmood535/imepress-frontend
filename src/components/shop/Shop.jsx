import React, { useEffect, useState } from "react";
import InnerpageHeader from "../general/InnerpageHeader";
import Shopsidebar from "../Shopsidebar";
import { API } from "../../api";
import { errorToast } from "../../hooks/useToast";
import Filterbar from "../../components/general/Filterbar";
import Productarea from "../../components/general/Productarea";
import Loader from "../general/Loader";
import { useQuery } from "../../hooks/queryParam";
import { Filter } from "../../assets";

const Shop = () => {
  let query = useQuery();
  let id = parseInt(query.get("id"));
  const [option, setOption] = useState(3);
  const [isChecked, setIsChecked] = useState(false);
  const [sorting, setSorting] = useState("All");
  const [products, setProducts] = useState(null);
  const [categories, setCategories] = useState(null);
  const [brands, setBrands] = useState(null);
  const [selectedPrice, setSelectedPrice] = React.useState([0, 1000]);
  const [selectedBrands, setSelectedBrands] = useState(null);
  const [loader, setLoader] = useState(true);
  const [selectedSubCategoies, setSelctedSubCategpries] = useState([]);
  const [selectedCategories, setSelctedCategories] = useState(id ? [id] : []);
  const [pageTitle, setPageTitle] = useState(
    query.get("category") || "categories"
  );
  const [showSideBar, setShowSideBar] = useState(true);

  const getData = async () => {
    let response;
    try {
      response = await API.getProducts();
      setProducts(response?.data?.data);
      setLoader(false);
      response = await API.getAllCategories();
      setCategories(response?.data?.data);
      response = await API.getAllBrands();
      setBrands(response?.data?.data);
    } catch (error) {
      setLoader(false);
      errorToast(error, "Can not fetch data");
    }
  };
  const handleMenuToggle = () => {
    setShowSideBar(!showSideBar);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="shoppage ">
      <InnerpageHeader pageTitle={pageTitle} breadcrums={"Shop"} />

      <div className="container w-full py-14 px-5 xl:w-[80%] mx-auto flex flex-wrap items-start">
        <div
          className={`filter-side-bar transition-width duration-1000 ease-in-out absolute left-0 h-full sm:static z-50 bg-white ${
            showSideBar ? "w-full sm:w-1/5" : "w-0 "
          }  `}
        >
          {showSideBar && (
            <button
              id="filter"
              onClick={handleMenuToggle}
              className="text-black font-medium text-lg px-5 py-2.5 text-center inline-flex items-center block sm:hidden "
            >
              <img
                src={Filter}
                alt="Filter"
                width={30}
                height={24}
                className=" pr-1 block sm:hidden"
              />
              Filter{" "}
            </button>
          )}
          <div className={` ${showSideBar ? "block" : "hidden"}`}>
            <Shopsidebar
              setSelctedSubCategpries={setSelctedSubCategpries}
              setSelectedBrands={setSelectedBrands}
              setSelectedPrice={setSelectedPrice}
              brands={brands}
              categoryitem={categories}
              selectedPrice={selectedPrice}
              selectedSubCategoies={selectedSubCategoies}
              setSelctedCategories={setSelctedCategories}
              setPageTitle={setPageTitle}
              id={id}
            />
          </div>
        </div>

        <div
          className={`shop-area w-full px-7 items-start transition-width duration-700 ease-in-out ${
            showSideBar ? "sm:w-4/5" : " w-full"
          } `}
        >
          <Filterbar
            setOption={setOption}
            option={option}
            setIsChecked={setIsChecked}
            isChecked={isChecked}
            sorting={sorting}
            setSorting={setSorting}
            showCheck={false}
            setShowSideBar={setShowSideBar}
            showSideBar={showSideBar}
          />

          {loader ? (
            <Loader />
          ) : (
            <Productarea
              selectedBrands={selectedBrands}
              selectedPrice={selectedPrice}
              selectedSubCategoies={selectedSubCategoies}
              data={products}
              option={option}
              isChecked={isChecked}
              sorting={sorting}
              selectedCategories={selectedCategories}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Shop;
