import React, { useEffect, useState } from "react";
import InnerpageHeader from "../general/InnerpageHeader";
import Shopsidebar from "../Shopsidebar";
import { API } from "../../api";
import { errorToast } from "../../hooks/useToast";
import Filterbar from "../../components/general/Filterbar";
import Productarea from "../../components/general/Productarea";
import Loader from "../general/Loader";
import { useQuery } from "../../hooks/queryParam";



const Shop = () => {
  let query = useQuery();
  let id = parseInt(query.get("id"))
  const [option, setOption] = useState(4);
  const [isChecked, setIsChecked] = useState(false);
  const [sorting, setSorting] = useState("All");
  const [products, setProducts] = useState(null);
  const [categories, setCategories] = useState(null);
  const [brands, setBrands] = useState(null);
  const [selectedPrice, setSelectedPrice] = React.useState([0, 1000]);
  const [selectedBrands, setSelectedBrands] = useState(null)
  const [loader, setLoader] = useState(true);
  const [selectedSubCategoies, setSelctedSubCategpries] = useState([])
  const [selectedCategories, setSelctedCategories] = useState(id ? [id] : [])
  const [pageTitle, setPageTitle] = useState(query.get("category") || 'categories')


  const getData = async () => {
    let response;
    try {
      response = await API.getProducts();
      setProducts(response?.data?.data);
      setLoader(false)
      response = await API.getAllCategories();
      setCategories(response?.data?.data);
      response = await API.getAllBrands();
      setBrands(response?.data?.data);
    } catch (error) {
      setLoader(false)
      errorToast(error, "Can not fetch data");
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="shoppage">
      <InnerpageHeader pageTitle={pageTitle} breadcrums={"Shop"} />

      <div className="container w-full py-14 px-5 xl:w-[80%] mx-auto flex flex-wrap">
        <div className="filter-side-bar  w-full sm:w-1/5">
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
        <div className="shop-area w-full sm:w-4/5 px-7">
          <Filterbar
            setOption={setOption}
            option={option}
            setIsChecked={setIsChecked}
            isChecked={isChecked}
            sorting={sorting}
            setSorting={setSorting}
            showCheck={true}
          />



          {loader ? <Loader /> : (

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
