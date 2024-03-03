import React from 'react';
import { Box, Button, Image, Flex } from '@chakra-ui/react';
import { CloseIcon } from '@chakra-ui/icons';

const ItemList = ({ items, displayAll, displayCount, handleRemoveItem, setDisplayAll }) => {
  return (
    <Box ml="40px">
      {items.length > 0 && (
        <Box>
          <Box mt="3" mb="2" fontWeight="bold">
            Selected items:
          </Box>
          <Flex align="flex-start" flexWrap="wrap">
            {displayAll
              ? items.map((item, index) => (
                  <Box key={index} display="flex" alignItems="center" mr="4" mb="4">
                    <Image src={item.url} alt={item.name} boxSize="120px" mr="2" />
                    <Button
                      size="sm"
                      onClick={() => handleRemoveItem(item)}
                      variant="ghost"
                      p="0"
                      fontSize="12px"
                    >
                      <CloseIcon color="red.500" boxSize="16px" />
                    </Button>
                  </Box>
                ))
              : items.slice(0, displayCount).map((item, index) => (
                  <Box key={index} display="flex" alignItems="center" mr="4" mb="4">
                    <Image src={item.url} alt={item.name} boxSize="120px" mr="2" />
                    <Button
                      size="sm"
                      onClick={() => handleRemoveItem(item)}
                      variant="ghost"
                      p="0"
                      fontSize="12px"
                    >
                      <CloseIcon color="red.500" boxSize="16px" />
                    </Button>
                  </Box>
                ))}
            {items.length > 3 && (
              <Button size="sm" mt="45px" onClick={() => setDisplayAll(!displayAll)}>
                {displayAll ? 'Show less' : 'Show more'}
              </Button>
            )}
          </Flex>
        </Box>
      )}
    </Box>
  );
};

export default ItemList;
