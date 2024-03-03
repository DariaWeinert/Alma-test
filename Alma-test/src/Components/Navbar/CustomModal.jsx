import React from 'react';
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalCloseButton } from '@chakra-ui/react';

const CustomModal = ({ isOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} size="md">
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Modal Header</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          {/* Содержимое модального окна */}
          {/* Ваш контент здесь */}
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default CustomModal;
