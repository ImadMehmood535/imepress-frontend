
import React from "react";
import InnerpageHeader from "../components/general/InnerpageHeader"
import { wishlistdata } from "../data/wishlistdata"
import WishlistComponent from "../components/WishlistComponent";


const WishList = () => {
    return (
        <div className="wishlist">
            <InnerpageHeader pageTitle={"Wishlist"} breadcrums={"Wishlist"} />
            <div className="shop-area py-24 container w-full px-5 xl:w-[80%] mx-auto overflow-x-hidden">
                <WishlistComponent product={wishlistdata} />
            </div>
        </div>
    );
};

export default WishList;
