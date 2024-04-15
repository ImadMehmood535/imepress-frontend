import React from "react";
import { nocontent } from "../assets";

const NoContent = () => {
  return (
    <div className="flex justify-center w-full">
      <img
        src={nocontent}
        alt="nocontent"
        width={500}
        height={500}
        className="max-w-[350px] w-full"
      />
    </div>
  );
};

export default NoContent;
