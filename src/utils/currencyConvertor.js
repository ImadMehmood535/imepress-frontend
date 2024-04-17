const convertor = (item, currentCurrency) => {
  return (item?.price * currentCurrency?.currencyValue).toFixed(2);
};

const calculateDiscount = (item, currentCurrency) => {
  return (
    (item?.price * currentCurrency?.currencyValue * item?.discount) / 100 +
    item?.price * currentCurrency?.currencyValue
  ).toFixed(2);
};

export { convertor, calculateDiscount };
