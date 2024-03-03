import React from 'react';
import { Box, Button, Flex, Heading } from '@chakra-ui/react';
import { Link} from 'react-router-dom';
import "./Home.css"
const HomePage = () => {
  return (
    <Box pt="7rem"textAlign="center" mt="8" height="100vh" >
      <Heading>Welcome to Alma Lasers Website!</Heading>
      <Button colorScheme="purple" mt="4"><Link className='custom-btn' to="/second">Second Page</Link></Button>
    </Box>


  );
};

export default HomePage;