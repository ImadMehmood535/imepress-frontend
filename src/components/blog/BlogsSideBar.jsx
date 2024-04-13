import { Autocomplete, AutocompleteItem } from "@nextui-org/react";
import React from "react";
import { LiaSearchSolid } from "react-icons/lia";
import { Link } from "react-router-dom";

const BlogsSideBar = ({ blogs, setBlogKey }) => {
  const onInputChange = (value) => {
    setBlogKey(value);
  };

  return (
    <div className=" flex flex-col gap-3">
      <Autocomplete
        label="Search Your Blog"
        className="max-w-xs cus-list"
        onInputChange={onInputChange}
        disableSelectorIconRotation
        selectorIcon={<LiaSearchSolid className="text-2xl mr-3" />}
      >
        {blogs?.map((animal) => (
          <AutocompleteItem key={animal?.id} value={animal?.name}>
            {animal?.name}
          </AutocompleteItem>
        ))}
      </Autocomplete>

      <h4>Recent Blogs</h4>
      <div className="flex flex-col gap-6">
        {blogs?.map((item, index) => {
          return (
            <div
              key={index}
              className="flex justify-start gap-5 max-w-[450px] w-full"
            >
              <img
                src={item?.imageUrl}
                alt={item?.name}
                width={300}
                height={300}
                className="rounded-md object-cover object-center max-w-[100px] "
              />

              <Link
                to={`${item?.slug}`}
                className="text-lg font-medium hover:underline cursor-pointer"
              >
                {item?.name.split(" ").slice(0, 7).join(" ")}
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default BlogsSideBar;
