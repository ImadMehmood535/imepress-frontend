import { create } from "zustand";

const isBrowser = typeof window !== "undefined";

const useCurrencyStore = create((set) => {
  const initialCurrency = isBrowser
    ? JSON.parse(localStorage.getItem("currency")) || {
        countryCode: "AED",
        currencyValue: 1,
      }
    : [];

  return {
    currentCurrency: initialCurrency,

    handleCurrency: (newCurrency) => {
      set({ currentCurrency: newCurrency });

      localStorage.setItem("currency", JSON.stringify(newCurrency));
    },
  };
});

export default useCurrencyStore;
