import React, { useState } from 'react';
import { Box, Flex, Heading } from '@chakra-ui/react';
import LongText from '../Components/LongText';
import FloatingActionButton from '../Components/FloatingActionButton';
import CustomModal from '../Components/CustomModal';

const SecondPage = () => {

    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
      setIsModalOpen(true);
      console.log('modal opened')
    };
  
    const closeModal = () => {
      setIsModalOpen(false);
    };

  return (
    <Box mt="8" px="4">
      <Heading mb="4">Second Page</Heading>
      <Box height="80vh" overflowY="auto">
        <LongText/>
      </Box>
      <FloatingActionButton onClick={openModal}/>
      <CustomModal isOpen={isModalOpen} onClose={closeModal}/> 
    </Box>
  );
};

export default SecondPage;
