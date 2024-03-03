import React from 'react';
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalCloseButton } from '@chakra-ui/react';
import InteractiveForm from './InteractiveForm';

const CustomModal = ({ isOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} size="md">
      <ModalOverlay />
      <ModalContent height="70vh" width="50vw" overflow="auto">
        <ModalHeader backgroundColor="purple.500">Interactive Form</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <InteractiveForm/>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default CustomModal;
