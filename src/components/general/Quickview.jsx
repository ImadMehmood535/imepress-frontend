import React, { useState } from "react";
import {
  Modal,
  ModalContent,
  ModalBody,
  useDisclosure,
} from "@nextui-org/react";
import { FaStar } from "react-icons/fa";
import useProductStore from "../../store/products"
import { FaMinus, FaPlus } from "react-icons/fa6";
import { FiEye } from "react-icons/fi";
import useUserStore from "../../store/user";
import SignModal from "../SignModal";

const Quickview = ({ item }) => {
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useProductStore();
  const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();

  const { user } = useUserStore();
  const [open, setOpen] = useState(false);


  const handleAddToCart = (item) => {

    if (user?.authorized) {
      addToCart(item);
      onClose();

    } else {
      setOpen(true)
    }
  };

  const decrementQuantity = () => {
    if (quantity <= 0) {
      setQuantity(quantity + 1);
    }
  };

  const incrementQuantity = () => {
    setQuantity(quantity + 1);
  };

  return (
    <div className="Quickview">
      <div
        onClick={onOpen}
        className="rounded-lg bg-white shadow-lg flex justify-center px-4 py-4 hover:text-white hover:bg-themeSecondry-0 transition-all"
      >
        <FiEye className="text-2xl cursor-pointer" />
      </div>

      <Modal
        backdrop="blur"
        size="5xl"
        isOpen={isOpen}
        onOpenChange={onOpenChange}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalBody className="py-0 px-0 rounded-none">
                <div className="flex flex-wrap flex-col sm:flex-row">
                  <div className="popup-image-area py-10 px-5 bg-[#F7F7F7] w-full sm:w-6/12">
                    <img
                      src={item?.imageUrl}
                      alt="popupimage"
                      width={450}
                      height={200}
                      className="max-w-[500px] w-full max-h-[500px] object-cover  "
                    />
                  </div>
                  <div className="popup-content-area w-full sm:w-6/12 py-10 px-5">
                    <h4 className="text-[#121212] capitalize text-4xl font-semibold mb-4">
                      {item?.name}
                    </h4>
                    {/* rating area */}
                    <div className="rating flex flex-wrap gap-2 items-center mb-4">
                      <ul className="flex flex-wrap gap-1">
                        <li>
                          <FaStar className="text-base" />
                        </li>
                        <li>
                          <FaStar className="text-base" />
                        </li>
                        <li>
                          <FaStar className="text-base" />
                        </li>
                        <li>
                          <FaStar className="text-base" />
                        </li>
                        <li>
                          <FaStar className="text-base" />
                        </li>
                      </ul>
                      {/* <span className="">(10)</span> */}
                    </div>
                    {/* price area */}
                    <div className="flex flex-wrap gap-4 mb-4">
                      <div className="saleprice">
                        <h4 className="text-[#DB4444] text-xl">
                          $ <spam>{item?.price}</spam>
                        </h4>
                      </div>
                      <div className="regprice">
                        <h4 className="text-[#A0A0A0] text-lg line-through">
                          $ <spam>{item?.price + 200}</spam>
                        </h4>
                      </div>
                    </div>
                    {/* short description */}
                    <div className="description mb-4">
                      <p className="">{item?.description.slice(0, 200)}</p>
                    </div>

                    <div className="variation-title mb-4">
                      <h6 className="font-semibold text-xl mb-3">Quantity</h6>

                      <div className="product-actions flex flex-wrap gap-3  py-9 sm:py-2">
                        <div
                          className=" rounded-xl qty-selector flex w-full sm:w-auto"
                          data-hs-input-number=""
                        >
                          <div className="flex items-center gap-x-1.5 border bg-white  border-gray-200">
                            <button
                              type="button"
                              className="h-full w-10 group/button inline-flex justify-center items-center gap-x-2 text-sm font-medium border border-gray-200 bg-white hover:bg-[#121212] rounded-none text-gray-800 shadow-sm"
                              onClick={decrementQuantity}
                            >
                              <FaMinus className="group-hover/button:fill-white group-hover/button:text-white" />
                            </button>
                            <input
                              className="w-16 py-2 text-center bg-transparent border-0"
                              type="text"
                              value={quantity}
                              readOnly
                            />
                            <button
                              type="button"
                              className="h-full w-10 group/button inline-flex justify-center items-center gap-x-2 text-sm font-medium border border-gray-200 bg-white hover:bg-[#121212] rounded-none text-gray-800 shadow-sm"
                              onClick={incrementQuantity}
                            >
                              <FaPlus className="group-hover/button:fill-white group-hover/button:text-white" />
                            </button>
                          </div>
                        </div>
                        <button
                          onClick={() =>
                            handleAddToCart({ ...item, quantity: quantity })
                          }
                          className="add-to-cart font-semibold transition text-sm bg-[#121212] w-auto md:w-72 text-white rounded hover:text-white uppercase py-3 px-9"
                        >
                          Add to cart
                        </button>
                        {open && <SignModal setOpen={setOpen} />}
                      </div>
                    </div>
                  </div>
                </div>
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
};

export default Quickview;
