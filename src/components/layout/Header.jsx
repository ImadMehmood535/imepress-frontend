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


    return (
        <div className="header">
            <div className="container sm:max-w-[100%]">
                <div className="top-bar bg-themeSecondry-0 flex flex-wrap items-center justify-center py-2 text-center sm:text-left">
                    <p className="text-themePrimary-0-0">
                        Free Delivery on orders over $80. Don’t miss discount.{" "}
                    </p>
                    <span className="font-bold flex flex-wrap items-center text-sm text-themePrimary-0 ml-2">
                        SALE OFF <FaArrowRight className="ml-2" />
                    </span>
                </div>
                <nav className="py-6 px-4 md:px-12 w-full z-[99999] bg-themePrimary-0">
                    <div className="container relative w-full mx-auto">
                        <div className="flex flex-row items-center">
                            <div className="basis-2/4 md:basis-1/6">
                                <div className="max-w-[80%]">
                                    <Link to="/" className="cursor-pointer">
                                        <img
                                            src={Header_logo}
                                            alt="Header_logo"
                                            className="w-full md:max-w-[80%]"
                                        />
                                    </Link>
                                </div>
                            </div>
                            <div className="hidden md:block md:basis-1/2">
                                <Searcharea />
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
                                    {authenticated && (
                                        <li>
                                            <IoMdLogOut  
                                                onClick={handleLogout}
                                                className="cursor-pointer text-2xl"
                                            />
                                        </li>
                                    )}
                                    {!authenticated && (
                                        <li>
                                            <Link to={"/log-in"}>
                                                <FiUser className="cursor-pointer text-2xl" />
                                            </Link>
                                        </li>
                                    )}
                                </ul>
                            </div>
                        </div>

                        <div className="hidden lg:block mb-3 cursor-pointer"></div>
                    </div>

                    <div className="flex justify-start items-center w-full pt-4">
                        <ul
                            className={`lg:flex lg:flex-row flex-col lg:h-full h-[100vh] lg:py-2 pt-24 items-start z-[998] ${isMenuOpen ? "flex bg-[#164A8C] mob-menu-sidebar" : "hidden"
                                } lg:max-w-[400px] max-w-[300px] px-4 gap-4 lg:gap-0 font-bold lg:font-normal lg:text-center lg:rounded-[67px] pt-20 w-full items-start lg:items-center xl:justify-center lg:static fixed top-0 right-0 text-white lg:bg-webGray-0`}
                        >
                            {menuItems?.map((item, index) => (
                                <li
                                    key={index}
                                    onMouseEnter={() => handleMouseEnter(item.id)}
                                    onMouseLeave={handleMouseLeave}
                                    className="max-w-[100px] w-full whitespace-nowrap"
                                >
                                    <Link
                                        to={item.to}
                                        className={`cursor-pointer hover:text-webRed-0 transition-colors ${location.pathname === item.to ||
                                            `/${hoveredItem}` === item?.to
                                            ? "bg-webLightYellow-0 py-1.5 px-3 rounded-[35px] whitespace-nowrap transition-all duration-500"
                                            : "py-1 px-3"
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
