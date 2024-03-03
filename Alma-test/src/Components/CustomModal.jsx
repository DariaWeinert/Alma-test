import React from 'react';
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalCloseButton } from '@chakra-ui/react';
import InteractiveForm from './InteractiveForm';
import "./CustomModal.css"
const CustomModal = ({ isOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} size="md">
      <ModalOverlay />
      <ModalContent height="70vh" width="50vw" overflow="auto" mt="15%">
        <ModalHeader backgroundColor="purple.500" color="white">Interactive Form</ModalHeader>
        <ModalCloseButton color="white" />
        <ModalBody>
          <InteractiveForm />
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default CustomModal;
