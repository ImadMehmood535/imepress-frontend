import { Autocomplete, AutocompleteItem, Avatar } from "@nextui-org/react";
import React from "react";
import { LiaSearchSolid } from "react-icons/lia";
import { Link, useNavigate } from "react-router-dom";

const Searcharea = ({ productsData }) => {
  const navigate = useNavigate();
  const redirect = (slug) => {
    navigate(`/shop/${slug}`)
    window.location.reload();
  }
  return (
    <Autocomplete
      className="max-w-md"
      label="Search your products"
      disableSelectorIconRotation
      selectorIcon={<LiaSearchSolid className="text-2xl mr-3" />}
    >
      {productsData?.map((item) => (
        <AutocompleteItem
          key={item?.id}
          onClick={() => redirect(item?.slug)}
          startContent={<Avatar alt={item?.name} className="w-6 h-6" src={item?.imageUrl} />}
        >
          {item?.name}
        </AutocompleteItem>

      ))}
    </Autocomplete>
  );
};

export default Searcharea;
