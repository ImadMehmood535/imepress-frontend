import React, { useEffect, useState } from "react";
import { Select, SelectItem, Avatar } from "@nextui-org/react";
import { currency } from "../../data/currency";
import { IoMdArrowDropdownCircle } from "react-icons/io";
import { API } from "../../api";
import { errorToast } from "../../hooks/useToast";
import useCurrencyStore from "../../store/currency";

const CurrencyInput = () => {
  const { handleCurrency, currentCurrency } = useCurrencyStore();
  const [selectedCurrency, setSelectedCurrency] = useState(
    currentCurrency?.countryCode
  );

  const handleCurrencyChange = (e) => {
    setSelectedCurrency(e.target.value);
  };

  const getCurrency = async () => {
    try {
      const response = await API.getConvertedCurrency(selectedCurrency);
      handleCurrency(response?.data?.data);
    } catch (error) {
      errorToast(error, "can not convert currency");
    }
  };

  useEffect(() => {
    getCurrency();
  }, [selectedCurrency]);
  console.log(currentCurrency, "currency");

  return (
    <Select
      className="max-w-xs"
      value={selectedCurrency}
      onChange={handleCurrencyChange}
      aria-label="currency"
      defaultSelectedKeys={[currentCurrency?.countryCode]}
      selectorIcon={<IoMdArrowDropdownCircle color="black" />}
      items={currency}
      renderValue={(items) => {
        return items.map((item) => (
          <div key={item.key} className="flex items-center gap-2">
            <Avatar
              alt={item.data.name}
              className="flex-shrink-0"
              size="sm"
              src={item.data.avatar}
            />
            <div className="flex flex-col">
              <span>{item.data.name}</span>
            </div>
          </div>
        ));
      }}
    >
      {(user) => (
        <SelectItem key={user.id} textValue={user.name}>
          <div className="flex gap-2 items-center">
            <Avatar
              alt={user.name}
              className="flex-shrink-0"
              size="sm"
              src={user.avatar}
            />
            <div className="flex flex-col">
              <span className="text-small">{user.name}</span>
            </div>
          </div>
        </SelectItem>
      )}
    </Select>
  );
};

export default CurrencyInput;
