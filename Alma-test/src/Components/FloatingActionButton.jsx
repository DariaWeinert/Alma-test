import React from 'react';
import { Box, Button, Modal, useDisclosure } from '@chakra-ui/react';

const FloatingActionButton = ({ onClick }) => {

  return (
    <>
      <Box
        position="fixed"
        top="100px"
        right="40px"
        zIndex="999"
      >
        <Button
          onClick={onClick}
          colorScheme="purple"
          size="lg"
          aria-label="Add"
          boxShadow="md"
          p="4"
          borderRadius="15px"
        >Open Modal
        </Button>
      </Box>

    </>
  );
};

export default FloatingActionButton;
