import { create } from "zustand";

// Check if window is defined (i.e., we're in a browser environment)
const isBrowser = typeof window !== "undefined";

const useProductStore = create((set) => {
  // Check if localStorage is available
  const storedProducts = isBrowser
    ? JSON.parse(localStorage.getItem("products")) || []
    : [];

  return {
    products: storedProducts,

    addToCart: (product) =>
      set((state) => {
        const updatedProduct = {
          ...product,
          quantity: product.quantity ? product?.quantity : 1,
        };

        const updatedProducts = [...state.products, updatedProduct];
        localStorage.setItem("products", JSON.stringify(updatedProducts));
        return { products: updatedProducts };
      }),

    removeFromCart: (productId) =>
      set((state) => {
        const updatedProducts = state.products.filter(
          (product) => product.id !== productId
        );
        localStorage.setItem("products", JSON.stringify(updatedProducts));
        return { products: updatedProducts };
      }),

    updateProduct: (updatedProduct) =>
      set((state) => {
        const updatedProducts = state.products.map((product) => {
          if (product.id === updatedProduct.id) {
            return { ...product, ...updatedProduct };
          }
          return product;
        });
        localStorage.setItem("products", JSON.stringify(updatedProducts));
        return { products: updatedProducts };
      }),

    clearCart: () => {
      localStorage.removeItem("products");
      set({ products: [] });
    },
  };
});

export default useProductStore;
