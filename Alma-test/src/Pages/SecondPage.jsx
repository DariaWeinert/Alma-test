import React from 'react';
import { Box, Flex, Heading } from '@chakra-ui/react';
import LongText from '../Components/Navbar/LongText';
// import FloatingActionButton from '../Components/FloatingActionButton';

const SecondPage = () => {
  return (
    <Box mt="8" px="4">
      <Heading mb="4">Second Page</Heading>
      <Box height="80vh" overflowY="auto">
        <LongText/>
      </Box>
      {/* <FloatingActionButton/> */}
    </Box>
  );
};

export default SecondPage;
