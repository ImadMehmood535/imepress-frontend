import { useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { FiShoppingCart, FiHeart, FiUser } from "react-icons/fi";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { IoCloseSharp } from "react-icons/io5";
import { RiMenu3Fill } from "react-icons/ri";
import { toast } from "react-toastify";
import { Header_logo } from "../../assets";
import { menuItems } from "../../data/header";
import useUserStore from "../../store/user";
import useProductStore from "../../store/products";
import Searcharea from "../general/SearchArea";
import useWishListStore from "../../store/wishlist";
import { IoMdLogOut } from "react-icons/io";
import CurrencyInput from "../general/CurrencyInput";
import { errorToast } from "../../hooks/useToast";
import { API } from "../../api";
import { Tooltip } from "@nextui-org/react";

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [hoveredItem, setHoveredItem] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { products } = useProductStore();
  const [cardLength, setCardLength] = useState(0);
  const [authenticated, setAuthenticated] = useState(false);
  const { user, logoutUser } = useUserStore();
  const { wishListItems } = useWishListStore();
  const [productsData, setProducts] = useState(null);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const handleMouseLeave = () => {
    setHoveredItem(null);
  };
  const handleMouseEnter = (itemId) => {
    setHoveredItem(itemId);
  };

  const handleLogout = () => {
    logoutUser();
    toast.success("Successfully logout");
    navigate("/");
  };

  useEffect(() => {
    setTimeout(() => {
      setCardLength(products?.length);
      setAuthenticated(user?.authorized);
    });
  }, [products, user]);

  const getData = async () => {
    try {
      const response = await API.getProducts();
      setProducts(response?.data?.data);
    } catch (error) {
      errorToast(error, "Can not fetch products");
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="header">
      <div className="container sm:max-w-[100%]">
        <div className="top-bar bg-themeSecondry-0 flex flex-wrap items-center justify-center py-2 text-center sm:text-left">
          <p className="text-themePrimary-0-0 text-sm">
            Free Delivery on orders over $80. Don’t miss discount.{" "}
          </p>
          <span className="font-bold flex flex-wrap items-center text-sm text-themePrimary-0 ml-2">
            SALE OFF <FaArrowRight className="ml-2" />
          </span>
        </div>
        <nav className="py-6 sm:py-3 px-4 md:px-12 w-full z-[99999] bg-themePrimary-0">
          <div className="container relative w-full mx-auto">
            <div className="flex flex-row items-center">
              <div className="basis-2/4 md:basis-1/12">
                <div className="md:w-[150px] w-[100px]">
                  <Link to="/" className="cursor-pointer">
                    <img
                      src={Header_logo}
                      alt="Header_logo"
                      className="w-full md:max-w-[80%]"
                    />
                  </Link>
                </div>
              </div>
              <div className="hidden md:block md:basis-4/5">
                <Searcharea productsData={productsData} />
              </div>
              <div className="basis-2/4 md:basis-2/6 text-right">
                <ul className="text-right flex flex-wrap gap-3 flex-row-reverse items-center text-white">
                  <li>
                    <div className="lg:hidden lg:static relative">
                      <button
                        onClick={handleMenuToggle}
                        className="text-white focus:outline-none"
                      >
                        {isMenuOpen ? (
                          <IoCloseSharp className="text-2xl absolute -top-24 right-0 text-black z-[999]" />
                        ) : (
                          <RiMenu3Fill className="text-2xl" />
                        )}
                      </button>
                    </div>
                  </li>

                  <Tooltip
                    placement="bottom"
                    showArrow={false}
                    content="Cart"
                    className="bg-themeSecondry-0 text-white"
                  >
                    <li className="relative">
                      <FiShoppingCart
                        onClick={() => navigate("/cart")}
                        className="text-2xl cursor-pointer"
                      />
                      {cardLength > 0 && (
                        <div className="w-[20px] h-[20px] flex flex-wrap items-start justify-center text-white bg-themeSecondry-0 rounded-full absolute -top-[15px] -right-[10px]">
                          {cardLength}
                        </div>
                      )}
                    </li>
                  </Tooltip>
                  <Tooltip
                    placement="bottom"
                    showArrow={false}
                    content="Wishlist"
                    className="bg-themeSecondry-0 text-white"
                  >
                    <li className="relative">
                      <Link to={"/wishlist"}>
                        <FiHeart className="text-2xl" />
                      </Link>

                      {wishListItems?.length > 0 && (
                        <div className="w-[20px] h-[20px] flex flex-wrap items-start justify-center text-white bg-themeSecondry-0 rounded-full absolute -top-[15px] -right-[10px]">
                          {wishListItems?.length}
                        </div>
                      )}
                    </li>
                  </Tooltip>
                  {authenticated && (
                    <Tooltip
                      placement="bottom"
                      showArrow={false}
                      content="Click To log out"
                      className="bg-themeSecondry-0 text-white"
                    >
                      <li>
                        <IoMdLogOut
                          onClick={handleLogout}
                          className="cursor-pointer text-2xl"
                        />
                      </li>
                    </Tooltip>
                  )}
                  {!authenticated && (
                    <Tooltip
                      placement="bottom"
                      showArrow={false}
                      content="log in"
                      className="bg-themeSecondry-0 text-white"
                    >
                      <li>
                        <Link to={"/log-in"}>
                          <FiUser className="cursor-pointer text-2xl" />
                        </Link>
                      </li>
                    </Tooltip>
                  )}
                  <li className="max-w-[120px] w-full">
                    <CurrencyInput />
                  </li>
                </ul>
              </div>
            </div>

            <div className="hidden lg:block mb-3 cursor-pointer"></div>
          </div>

          <div className="flex justify-start items-center w-full ">
            <ul
              className={`lg:flex lg:flex-row flex-col lg:  h-full  lg:py-2 pt-24 items-start z-[998] ${
                isMenuOpen ? "flex bg-[#164A8C] mob-menu-sidebar" : "hidden"
              } lg:max-w-[400px] w-full px-4 gap-4 lg:gap-0 font-bold lg:font-normal lg:text-left lg:rounded-[67px] pt-20 w-full items-start lg:items-center xl:justify-center lg:static fixed top-0 right-0 text-white lg:bg-webGray-0`}
            >
              {menuItems?.map((item, index) => (
                <li
                  key={index}
                  onMouseEnter={() => handleMouseEnter(item.id)}
                  onMouseLeave={handleMouseLeave}
                  className="max-w-[100px] w-full text-left whitespace-nowrap"
                >
                  <Link
                    to={item.to}
                    className={`cursor-pointer hover:text-webRed-0 transition-colors ${
                      location.pathname === item.to ||
                      `/${hoveredItem}` === item?.to
                        ? "bg-webLightYellow-0 py-1.5  rounded-[35px] whitespace-nowrap transition-all duration-500 text-themeSecondry-0"
                        : "py-1 `"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Header;
