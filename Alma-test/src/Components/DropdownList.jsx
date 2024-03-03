import React, { useState } from 'react';
import { Box, Image, Text } from '@chakra-ui/react';

const DropdownList = ({ options, filteredOptions, handleOptionSelect, selectedItems }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleOptionClick = (option) => {
        if (selectedItems.length < 6 || selectedItems.includes(option)) {
            handleOptionSelect(option);
        }
    };

    return (
        <Box mt="4" m="1rem" width="90%" position="relative">
            <Box backgroundColor="#805ad5" borderRadius="5px" color="white" mb="2" fontWeight="bold" onClick={toggleDropdown} cursor="pointer">
                <Text ml="1rem">Select the meme you like:</Text>
            </Box>
            {isOpen && (
                <Box
                    borderWidth="1px"
                    borderColor="gray.200"
                    borderRadius="md"
                    maxHeight="200px"
                    overflowY="auto"
                    position="absolute"
                    width="100%"
                    zIndex="10"
                    backgroundColor="white"
                >
                    <div style={{ maxHeight: '160px', overflowY: 'auto' }}>
                        {filteredOptions.length > 0
                            ? filteredOptions.map((option, index) => (
                                <div
                                    key={index}
                                    className='option'
                                    onClick={() => handleOptionClick(option.name)}
                                    style={{
                                        cursor: selectedItems.length === 6 && !selectedItems.includes(option.name) ? 'not-allowed' : 'pointer',
                                        height: '40px',
                                        padding: '8px',
                                        transition: 'background-color 0.3s ease-in-out',
                                    }}
                                    onMouseEnter={(e) => e.target.style.backgroundColor = '#f0f0f0'}
                                    onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
                                >
                                    {option.name}
                                </div>
                            ))
                            : options.map((option, index) => (
                                <div
                                    key={index}
                                    className='option'
                                    onClick={() => handleOptionClick(option.name)}
                                    style={{
                                        cursor: selectedItems.length === 6 && !selectedItems.includes(option.name) ? 'not-allowed' : 'pointer',
                                        height: '40px',
                                        padding: '8px',
                                        transition: 'background-color 0.3s ease-in-out',
                                    }}
                                    onMouseEnter={(e) => e.target.style.backgroundColor = '#f0f0f0'}
                                    onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
                                >
                                    {option.name}
                                </div>
                            ))}
                    </div>
                </Box>
            )}
        </Box>
    );
};

export default DropdownList;
