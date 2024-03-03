import React from 'react';
import { Box, Button, useDisclosure } from '@chakra-ui/react';
import { AddIcon } from '@chakra-ui/icons';

const FloatingActionButton = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleButtonClick = () => {
    onOpen();
  };

  return (
    <>
      <Box
        position="fixed"
        bottom="40px"
        right="40px"
        zIndex="999"
      >
        <Button
          onClick={handleButtonClick}
          colorScheme="blue"
          size="lg"
          aria-label="Add"
          boxShadow="md"
          p="4"
          borderRadius="50%"
        >
          <AddIcon />
        </Button>
      </Box>
      {/* Модальное окно */}
      {/* <Modal isOpen={isOpen} onClose={onClose} /> */}
    </>
  );
};

export default FloatingActionButton;
