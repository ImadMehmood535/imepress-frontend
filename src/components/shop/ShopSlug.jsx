import InnerpageHeader from "../general/InnerpageHeader";
import React, { useEffect, useState } from "react";
import { Delivery_Truck } from "../../assets";
import { FaRegHeart } from "react-icons/fa";
import { Tooltip, Button } from "@nextui-org/react";
import { CiCircleInfo } from "react-icons/ci";
import { FaMinus, FaPlus } from "react-icons/fa6";
import DailySale from "../general/DailySale";
import { API } from "../../api";
import { errorToast } from "../../hooks/useToast";
import Loader from "../general/Loader";
import useProductStore from "../../store/products";
import { Link } from "react-router-dom";

const ShopSlug = ({ slug }) => {
    const [quantity, setQuantity] = useState(1);
    const [product, setProduct] = useState(null);
    const [relatedProduct, setRelatedProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [loading2, setLoading2] = useState(true);
    const { addToCart } = useProductStore();

    const decrementQuantity = () => {
        if (quantity > 0) {
            setQuantity(quantity - 1);
        }
    };

    const incrementQuantity = () => {
        setQuantity(quantity + 1);
    };

    const getData = async () => {
        try {
            const response = await API.getSingleProduct(slug);
            setProduct(response?.data?.data);
            const res = await API.getProductByCategoryID(product?.categoryId);
            setRelatedProduct(res?.data?.data);

            setLoading(false);
            setLoading2(false);
        } catch (error) {
            setLoading(false);
            setLoading2(false);

            errorToast(error, "Can not fetch");
        }
    };

    useEffect(() => {
        getData();
    }, []);

    return (
        <div className="single-product">
            {loading ? (
                <Loader />
            ) : (
                <>
                    <InnerpageHeader
                        pageTitle={`${product?.name}`}
                        breadcrums={`${product?.slug}`}
                    />

                    <div className="container w-full py-14 px-5 xl:w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="image-area m-auto">
                            <img
                                src={product?.imageUrl}
                                width={550}
                                height={200}
                                alt={product?.name}
                                className="w-full md:w-[80%] "
                            />
                        </div>
                        <div className="content-area">
                            <div className="page-bradcrum">
                                <p className="font-semibold uppercase text-[#A0A0A0] text-sm">
                                    {product?.category}
                                </p>
                            </div>
                            <div className="product-title py-2">
                                <h4 className="text-[#121212] capitalize text-4xl font-semibold mb-4">
                                    {product?.name}
                                </h4>
                                <ul className="flex flex-wrap items-center gap-4">

                                    <li className="text-[#3DAB25] font-semibold">In Stock</li>
                                </ul>
                            </div>
                            <div className="price-area py-2">
                                <div className="flex flex-wrap gap-4 mb-4 items-center">
                                    <div className="saleprice">
                                        <h4 className="text-[#121212] text-3xl md:text-4xl">
                                            $<spam>{product?.price}</spam>
                                        </h4>
                                    </div>
                                    <div className="regprice">
                                        <h4 className="text-[#A0A0A0] text-lg line-through">
                                            $ <spam>{product?.price + 200}</spam>
                                        </h4>
                                    </div>
                                </div>
                            </div>
                            {product?.shortDescription &&

                                <>
                                    <div className="short-des py-2">
                                        <p className="text-[#616161] text-lg">
                                            The garments labelled as Committed are products that have been
                                            produced using sustainable fibres or processes, reducing their
                                            environmental impact.
                                        </p>
                                    </div>
                                    <div className="divider md:py-10">
                                        <div className="border-t-1 border-[#E5E5E5]"></div>
                                    </div>
                                </>


                            }
                            <div className="product-actions flex flex-wrap gap-3  py-9 sm:py-2">
                                <div
                                    className=" rounded-xl qty-selector flex w-full sm:w-auto"
                                    data-hs-input-number=""
                                >
                                    <div className="flex items-center gap-x-1.5 border bg-white  border-gray-200">
                                        <button
                                            type="button"
                                            className="h-full w-10 group/button inline-flex justify-center items-center gap-x-2 text-sm font-medium border border-gray-200 bg-white hover:bg-[#121212] rounded-none text-gray-800 shadow-sm"
                                            onClick={decrementQuantity}
                                        >
                                            <FaMinus className="group-hover/button:fill-white group-hover/button:text-white" />
                                        </button>
                                        <input
                                            className="w-16 py-2 text-center bg-transparent border-0"
                                            type="text"
                                            value={quantity}
                                            readOnly
                                        />
                                        <button
                                            type="button"
                                            className="h-full w-10 group/button inline-flex justify-center items-center gap-x-2 text-sm font-medium border border-gray-200 bg-white hover:bg-[#121212] rounded-none text-gray-800 shadow-sm"
                                            onClick={incrementQuantity}
                                        >
                                            <FaPlus className="group-hover/button:fill-white group-hover/button:text-white" />
                                        </button>
                                    </div>
                                </div>
                                <Link
                                    to={"/cart"}
                                    onClick={() => addToCart({ ...product, quantity: quantity })}
                                    className="add-to-cart flex justify-center font-semibold transition text-sm bg-[#121212] w-auto md:w-72 text-white rounded hover:text-white uppercase py-4 px-9 hover:bg-themePrimary-0 "
                                >
                                    Add to cart
                                </Link>
                                <div className="wishlist">
                                    <Tooltip content="Wishlist">
                                        <Button className="rounded-lg px-0 bg-white border py-4 h-full w-10 group/button inline-flex justify-center items-center gap-x-2 text-sm font-mediumborder border-gray-200 hover:bg-[#121212] shadow-sm">
                                            <FaRegHeart className="text-2xl group-hover/button:fill-white group-hover/button:text-white hover:bg-[#121212]" />
                                        </Button>
                                    </Tooltip>
                                </div>
                            </div>
                            <div className="term-condition py-2">
                                <ul className="max-w-md space-y-1 text-gray-500 list-inside dark:text-gray-400">
                                    <li className="flex items-center gap-2 text-[#121212] font-semibold">
                                        <CiCircleInfo className="fill-[#3DAB25]" />
                                        Ready to ship | Order today
                                        <Tooltip
                                            showArrow={true}
                                            className="w-56"
                                            size="md"
                                            placement="bottom-start"
                                            offset="7"
                                            containerPadding="12"
                                            content="Your Order Is Expected to Arrive within 3-9 business day. Once your order has been dispatched from our warehouse you will receive a shipping confirmation email with your tracking number and link to track your order online."
                                        >
                                            <Button className="bg-white p-0 w-auto h-auto min-w-0">
                                                <CiCircleInfo className="text-xl" />
                                            </Button>
                                        </Tooltip>
                                    </li>
                                </ul>
                            </div>
                            <div className="divider py-10">
                                <div className="border-t-1 border-[#E5E5E5]"></div>
                            </div>
                            <div className="store-feature">
                                <h4 className="text-[#121212] capitalize text-2xl font-semibold mb-4">
                                    Get it today
                                </h4>
                                <div className="feture-item flex flex-wrap gap-2 items-center mb-5">
                                    <div className="w-16">
                                        <img
                                            src={Delivery_Truck}
                                            alt="Delivery_Truck"
                                            width={60}
                                            className=""
                                        />
                                    </div>
                                    <div className="w-auto">
                                        <h4 className="text-[#121212] capitalize text-lg font-semibold ">
                                            Fast Shipping
                                        </h4>
                                        <p className="text-[#616161]  text-sm">
                                            Free Delivery When order from $500.
                                        </p>
                                    </div>
                                </div>
                                <div className="feture-item flex flex-wrap gap-2 items-center">
                                    <div className="w-16">
                                        <img
                                            src={Delivery_Truck}
                                            alt="Delivery_Truck"
                                            width={60}
                                            className=""
                                        />
                                    </div>
                                    <div className="w-auto">
                                        <h4 className="text-[#121212] capitalize text-lg font-semibold ">
                                            100 - Day Returns
                                        </h4>
                                        <p className="text-[#616161] text-sm">
                                            Not impressed? Get a refund. You have 100 days to break
                                            our hearts.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container w-full py-14 px-5 xl:w-[80%] mx-auto ">
                        <div className="tabs-area flex w-full flex-col">
                            <h4 className="text-[#121212] capitalize text-lg font-semibold underline mb-2">
                                Description
                            </h4>
                            <p className="text-[#616161] text-sm">{product?.description}</p>
                        </div>
                    </div>
                </>
            )}

            {loading2 ? (
                <Loader />
            ) : (
                <DailySale data={relatedProduct} title="Related Products" />
            )}
        </div>
    );
};

export default ShopSlug;
