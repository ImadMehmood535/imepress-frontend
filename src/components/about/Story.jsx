import React from "react";
import { Image } from "@nextui-org/react";
import { FaRocket } from "react-icons/fa6";
import { FaBookmark } from "react-icons/fa6";
import { IoVideocamSharp } from "react-icons/io5";
import { BsFillQuestionSquareFill } from "react-icons/bs";
import { about_image } from "../../assets";

const Story = () => {
  return (
    <div className="story">
      <div className="container px-5 pt-24 pb-12 w-full xl:w-[80%] mx-auto overflow-x-hidden ">
        <div className="mb-12">
          <h2 className="sm:text-4xl text-3xl font-medium text-base-content text-center">
            THE STORY
          </h2>
          <p className="max-w-3xl mx-auto mt-4 text-xl text-center font-normal">
            One Vintage is a distinctive luxury brand founded by Simone Myson in
            2010. This avant-garde label ingeniously revitalizes antique
            textiles and relics, seamlessly weaving them into contemporary and
            modern masterpieces.
          </p>
        </div>
        <div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
          <div>
            <div className="mt-4 space-y-12">
              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center w-12 h-12 rounded-md">
                    <FaRocket />
                  </div>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium leadi ">
                    BELEVE IN DESIGN PRIORITY
                  </h4>
                  <p className="mt-2  font-normal">
                    Felis donec et odio pellentesque diam volutpat commodo sed
                    egestas. Eget lorem dolor sed viverra ipsum nunc aliquet
                    bibendum. Nibh cras pulvinar mattis nunc sed blandit libero
                    volutpat sed. Purus faucibus ornare suspendisse sed nisi
                    lacus sed viverra mattis nunc sed.
                  </p>
                </div>
              </div>
              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center w-12 h-12 rounded-md">
                    <FaBookmark />
                  </div>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium leadi ">
                    BELEVE IN DESIGN PRIORITY
                  </h4>
                  <p className="mt-2  font-normal">
                    Felis donec et odio pellentesque diam volutpat commodo sed
                    egestas. Eget lorem dolor sed viverra ipsum nunc aliquet
                    bibendum. Nibh cras pulvinar mattis nunc sed blandit libero
                    volutpat sed. Purus faucibus ornare suspendisse sed nisi
                    lacus sed viverra mattis nunc sed.
                  </p>
                </div>
              </div>
              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center w-12 h-12 rounded-md">
                    <IoVideocamSharp />
                  </div>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium leadi ">
                    BELEVE IN DESIGN PRIORITY
                  </h4>
                  <p className="mt-2  font-normal">
                    Felis donec et odio pellentesque diam volutpat commodo sed
                    egestas. Eget lorem dolor sed viverra ipsum nunc aliquet
                    bibendum. Nibh cras pulvinar mattis nunc sed blandit libero
                    volutpat sed. Purus faucibus ornare suspendisse sed nisi
                    lacus sed viverra mattis nunc sed.
                  </p>
                </div>
              </div>
              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center w-12 h-12 rounded-md">
                    <BsFillQuestionSquareFill />
                  </div>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium leadi ">
                    Advanced Quiz Generation{" "}
                  </h4>
                  <p className="mt-2 ">
                    Take your knowledge testing to the next level with advanced
                    quiz generation, providing more customization options for
                    your quizzes.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div aria-hidden="true" className="mt-10 lg:mt-0">
            <Image
              width="600"
              height="600"
              src={about_image}
              alt={about_image}
              className="mx-auto rounded-lg shadow-lg dark-bg-gray-500"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Story;
