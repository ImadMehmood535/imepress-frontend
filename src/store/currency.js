import { create } from "zustand";

const isBrowser = typeof window !== "undefined";

const useCurrencyStore = create((set) => {
  const initialCurrency = isBrowser
    ? JSON.parse(localStorage.getItem("currency")) || [] 
    : [];

  return {
    currentCurrency: initialCurrency,

    handleCurrency: (newCurrency) =>
      set(() => ({
        currentCurrency: newCurrency,
      })),
  };
});

export default useCurrencyStore;
