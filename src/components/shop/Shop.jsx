import React, { useEffect, useState } from "react";
import InnerpageHeader from "../general/InnerpageHeader";
import Shopsidebar from "../Shopsidebar";
import { API } from "../../api";
import { errorToast } from "../../hooks/useToast";
import Filterbar from "../../components/general/Filterbar";
import Productarea from "../../components/general/Productarea";


const Shop = () => {
  const [option, setOption] = useState(4);
  const [isChecked, setIsChecked] = useState(false);
  const [sorting, setSorting] = useState("All");
  const [products, setProducts] = useState(null);
  const [categories, setCategories] = useState(null);
  const [brands, setBrands] = useState(null);
  const [selectedPrice, setSelectedPrice] = React.useState([0, 300]);
  const [selectedBrands, setSelectedBrands] = useState(null)
  const getData = async () => {
    let response;
    try {
      response = await API.getProducts();
      setProducts(response?.data?.data);
      response = await API.getAllCategories();
      setCategories(response?.data?.data);
      response = await API.getAllBrands();
      setBrands(response?.data?.data);
    } catch (error) {
      errorToast(error, "Can not fetch data");
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="shoppage">
      <InnerpageHeader pageTitle={"Clothing"} breadcrums={"Shop"} />
      {products && (
        <div className="container w-full py-14 px-5 xl:w-[80%] mx-auto flex flex-wrap">
          <div className="filter-side-bar  w-full sm:w-1/5">
            <Shopsidebar
              setSelectedBrands={setSelectedBrands}
              setSelectedPrice={setSelectedPrice}
              brands={brands}
              categoryitem={categories}
              selectedPrice={selectedPrice}
            />
          </div>
          <div className="shop-area w-full sm:w-4/5 px-7">
            <Filterbar
              setOption={setOption}
              option={option}
              setIsChecked={setIsChecked}
              isChecked={isChecked}
              sorting={sorting}
              setSorting={setSorting}
            />

            <Productarea
              selectedBrands={selectedBrands}
              selectedPrice={selectedPrice}
              data={products}
              option={option}
              isChecked={isChecked}
              sorting={sorting}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Shop;
