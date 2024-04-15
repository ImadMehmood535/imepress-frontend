import React, { useState } from "react";
import { FaRegHeart } from "react-icons/fa";
import CardModal from "../CartModal";
import Quickview from "./Quickview";
import { Link } from "react-router-dom";
import useProductStore from "../../store/products";
import useWishListStore from "../../store/wishlist";
import useUserStore from "../../store/user";
import SignModal from "../SignModal";

const ProductCart = ({ item }) => {
  const { addToCart } = useProductStore();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { addToWishList } = useWishListStore();
  const { user } = useUserStore();
  const [open, setOpen] = useState(false)

  const handleAddToCart = (item) => {

    if (user?.authorized) {
      addToCart(item);
      setIsModalOpen(true);

    } else {
      setOpen(true)

    }
  };

  return (
    <div className="ProductCart">
      <div className="item group/product transition-all duration-500 ">
        <div className="image-area relative border py-14 px-10 text-center min-h-[450px] overflow-hidden flex items-center justify-center">
          <div className="tag-wrapper absolute top-2 left-2">
            {Object.entries(item.tags).map(([tag, value]) => {
              if (value) {
                return (
                  <div
                    key={tag}
                    className="bg-themeSecondry-0 z-30 relative  uppercase rounded-md py-1 px-4 text-white font-bold mb-2"
                  >
                    {tag}
                  </div>
                );
              }
            })}
            {item?.discount > 0 && (
              <div className="bg-themePrimary-0 z-30 relative uppercase rounded-md py-1 px-4 text-white font-bold">
                {item?.discount}%
              </div>
            )}
          </div>
          <div className="options absolute top-4 -right-20 transition z-20">
            <div className="options_list flex flex-wrap flex-col gap-4">
              <div onClick={() => addToWishList(item)} className="rounded-lg bg-white hover:text-white hover:bg-themePrimary-0 transition-all shadow-lg flex justify-center px-4 py-4">
                <FaRegHeart className="text-2xl " />
              </div>
              <Quickview item={item} />
            </div>
          </div>
          <Link to={`/shop/${item?.slug}`}>
            <img
              src={item?.imageUrl}
              alt={item?.name}
              width={250}
              height={250}
              className="w-full z-10 aspect-square h-auto max-h-[350px]"
            />
          </Link>
          <div
            onClick={() => handleAddToCart(item)}
            className="btn-area hover:bg-themePrimary-0 cursor-pointer absolute -bottom-20 group-hover/product:bottom-0 left-0 right-0 py-3 px-2 bg-[#121212] text-white"
          >
            Add to cart
          </div>
          {isModalOpen && <CardModal />}
          {open && <SignModal setOpen={setOpen} />}
        </div>
        <div className="detail-area py-3">
          <h4 className="font-bold text-[#121212] text-base capitalize">
            {item?.name}
          </h4>
          <div className="flex flex-wrap items-center gap-2">
            <p className="text-[#DB4444] font-medium uppercase">
              AED {item?.price}
            </p>
            <span className="line-through text-[#A0A0A0] uppercase text-sm">
              AED {item?.price + 200}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCart;
