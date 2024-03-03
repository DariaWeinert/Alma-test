import React from 'react';
import { Box, Button, Flex, Heading, Text } from '@chakra-ui/react';
import { Link} from 'react-router-dom';
import "./Home.css"
const HomePage = () => {
  return (
    <>
    <Box pt="7rem" textAlign="center" mt="8" height="80vh" >
      <Box width="75%" mx="auto">
        <Heading>Welcome to my Test Assignment!</Heading>
        <Button colorScheme="purple" mt="4">
          <Link className='custom-btn' to="/second">Second Page</Link>
        </Button>
      </Box>  
    </Box>
    <Text mt="auto"textAlign="right" mr="20px" fontWeight="bold">Created by Daria Weinert</Text>
    </>
  );
};

export default HomePage;