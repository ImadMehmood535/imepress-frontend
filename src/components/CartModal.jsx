import React, { useEffect } from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";
import { FaCircleCheck } from "react-icons/fa6";

const CardModal = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  useEffect(() => {
    onOpen();
  }, [onOpen]);

  return (
    <>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1"></ModalHeader>
              <ModalBody>
                <div className="flex justify-start gap-4 items-center">
                  <h4>Succussfully added to cart</h4>
                  <FaCircleCheck className="text-3xl  " />
                </div>
              </ModalBody>
              <ModalFooter>
                <Button
                  className="bg-themePrimary-0 hover:bg-themeSecondry-0 text-white"
                  onPress={() => {
                    onClose();
                  }}
                >
                  Continue Shopping
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

export default CardModal;
