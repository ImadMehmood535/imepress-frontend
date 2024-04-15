import { create } from "zustand";

const isBrowser = typeof window !== "undefined";

const useCurrencyStore = create((set) => {
    
  const initialCurrency = isBrowser
    ? JSON.parse(localStorage.getItem("currency"))
    : [];

  return {
    currency: initialCurrency,

    handleCurrency: (newCurrency) =>
      set(() => ({
        currency: newCurrency,
      })),
  };
});

export default useCurrencyStore;
