import { Box, Flex, Heading } from '@chakra-ui/react';
import { Link } from "react-router-dom";
import "./NavBar.css"

const NavigationBar = () => {
  return (
    <Flex bg="purple.500" width="100vw" p="4" alignItems="center">
      <Box p="0">
        <img className='logo-img' src="https://storage.googleapis.com/finder-images/$yvNOHcGAtbbmpEAwnxvozfQwmjWkbVbW98WhfxjiQcxYRwwqyVauZ9" alt="Logo" />
      </Box>
      <Box>
        <Heading size="md" color="white">Alma Lasers</Heading>
      </Box>
      <Box ml="auto">
        <Link className='nav-link' to="/" color="white" mr="4">Home</Link>
        <Link className='nav-link' to="/second" color="white">Second Page</Link>
      </Box>
    </Flex>
  );
};

export default NavigationBar;