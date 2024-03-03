import React, { useEffect, useState } from 'react';
import { Box, Button, Flex, Heading, Text, Image, Grid } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import "./Home.css"

const HomePage = () => {
    const [items, setItems] = useState([]);

    const handleReset = () => {
        localStorage.removeItem('selectedItems');
        window.location.reload();
    };

    useEffect(() => {
        const storedItems = JSON.parse(localStorage.getItem('selectedItems')) || [];
        setItems(storedItems);
    }, []);

    return (
        <>

            {items.length > 0 ? (
                <Box pt="3rem" textAlign="center" mt="8">
                    <Box>
                        <Heading pb="1rem">The memes you've chosen:</Heading>
                        <Grid templateColumns="repeat(3, 1fr)" gap="2" padding="0 2rem">
                            {items.map((item, index) => (


                                <Box key={index} mb="4" display="flex" flexDirection="column" alignItems="center" borderWidth="1px" borderColor="gray.200" borderRadius="md" p="1rem">
                                    <Text fontWeight="bold" mb="2">{item.name}</Text>
                                    <Image src={item.url} alt={item.name} boxSize="300px" objectFit="cover" />

                                </Box>

                            ))}

                        </Grid>
                        <Button onClick={handleReset} colorScheme="purple" mt="4">
                            Reset
                        </Button>
                    </Box>
                </Box>
            ) : (
                <Box pt="3rem" textAlign="center" mt="8">
                    <Box width="75%" mx="auto" height="100vh">
                        <Heading>Welcome to my Test Assignment!</Heading>
                        <Button className="custom-btn" colorScheme="purple" mt="3rem">
                            <Link className="custom-link" to="/second">Second Page</Link>
                        </Button>
                    </Box>
                </Box>
            )}

            <Text mt="auto" textAlign="right" mr="20px" fontWeight="bold">Created by Daria Weinert</Text>
        </>
    );
};

export default HomePage;
