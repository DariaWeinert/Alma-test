import React from 'react';
import { Box, Select, Image } from '@chakra-ui/react';

const DropdownList = ({ options, filteredOptions, handleOptionSelect, selectedItems }) => {
  return (
    <Box mt="4">
      <Box mb="2" fontWeight="bold">
        Dropdown:
      </Box>
      <Select placeholder="Select an option" maxH="5rem" overflowY="auto" onChange={(e) => handleOptionSelect(e.target.value)} disabled={selectedItems.length === 6}>
        {filteredOptions.length > 0
          ? filteredOptions.slice(0, 10).map((option, index) => (
              <option key={index} value={option.name}>
                {option.name}
                <Image src={option.url} alt={option.name} boxSize="50px" mr="2" />
              </option>
            ))
          : options.slice(0, 10).map((option, index) => (
              <option key={index} value={option.name}>
                {option.name}
                <Image src={option.url} alt={option.name} boxSize="50px" mr="2" />
              </option>
            ))}
      </Select>
    </Box>
  );
};

export default DropdownList;
