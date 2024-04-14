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
import { useNavigate } from "react-router-dom";

const SignModal = ({ setOpen }) => {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const navigate = useNavigate();


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
                                    <h4>Please Log In to continue </h4>
                                </div>
                            </ModalBody>
                            <ModalFooter>
                                <Button
                                    className="bg-themePrimary-0 hover:bg-themeSecondry-0 text-white"
                                    onPress={() => {
                                        onClose();
                                        setOpen(false);
                                        navigate("/log-in");
                                    }}
                                >
                                    Log In
                                </Button>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </>
    );
};

export default SignModal;
