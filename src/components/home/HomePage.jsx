import React, { useEffect, useState } from "react";
import Banner from "./Banner";
import Homecateg from "./Homecateg";
import DailySale from "../general/DailySale"
import { errorToast } from "../../hooks/useToast"
import Loader from "../general/Loader";
import { API } from "../../api/index"
import Featurecollection from "./Featurecollection"
import Saletimer from "./Saletimer"
import Benefits from "./Benefits"
import Instafeeds from "./Instafeeds"
import Newsletter from "../general/Newsletter"


const HomePage = () => {
  const [homeCategData, setHomeCategData] = useState(null);
  const [dailyData, setDailyData] = useState(null);
  const [featuredData, setFeaturedData] = useState(null);
  const [loading, setLoading] = useState(true);

  const getData = async () => {
    let response;
    try {
      response = await API.getCategorirs();
      setHomeCategData(response?.data?.data);
      response = await API.getProductsQueryParams("isSale");
      setDailyData(response?.data?.data);
      response = await API.getProductsQueryParams("isFeatured");
      setFeaturedData(response?.data.data);
      setLoading(false);
    } catch (error) {
      errorToast(error, "Can not fetch data");
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);


  return (
    <>
      <Banner />


      {loading ? (
        <Loader />
      ) : (<>

        <Homecateg data={homeCategData} />
      </>
      )}


      <DailySale
        data={dailyData}
        title="Daily Sale"
        exp="Top sale on this week"
      />
      <Featurecollection />
      <Saletimer />
      <Benefits />
      <DailySale
        data={featuredData}
        title="Looks You’ll Love"
        exp="get your featured products"
      />
      <Instafeeds />
      <Newsletter />
    </>


  );
};

export default HomePage;
