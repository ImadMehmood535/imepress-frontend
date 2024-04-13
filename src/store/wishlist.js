import { create } from "zustand";

const isBrowser = typeof window !== "undefined";

const useWishListStore = create((set) => {
  const items = isBrowser
    ? JSON.parse(localStorage.getItem("wishlist")) || []
    : [];

  return {
    wishListItems: items,

    addToWishList: (product) =>
      set((state) => {
        const isProductInWishlist = state.wishListItems.some(
          (p) => p.id === product.id
        );

        if (!isProductInWishlist) {
          const products = [...state.wishListItems, product];
          localStorage.setItem("wishlist", JSON.stringify(products));
          return { wishListItems: products };
        } else {
          return state;
        }
      }),

    removeFromWishList: (productId) =>
      set((state) => {
        const updatedProducts = state.wishListItems.filter(
          (product) => product.id !== productId
        );
        localStorage.setItem("wishlist", JSON.stringify(updatedProducts));
        return { wishListItems: updatedProducts };
      }),
  };
});

export default useWishListStore;
