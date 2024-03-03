import React, { useState, useEffect } from 'react';
import { VStack, Input, Button, Box } from '@chakra-ui/react';
import ItemList from './ItemList';
import DropdownList from './DropdownList';

const InteractiveForm = () => {
  const [selectedItems, setSelectedItems] = useState([]);
  const [dropdownOptions, setDropdownOptions] = useState([]);
  const [filteredOptions, setFilteredOptions] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [displayAll, setDisplayAll] = useState(false);
  const [displayCount, setDisplayCount] = useState(3);

  const fetchOptions = async () => {
    try {
      const response = await fetch('https://api.imgflip.com/get_memes');
      const data = await response.json();
      const shuffledMemes = shuffleArray(data.data.memes);
      const selectedMemes = shuffledMemes.slice(0, 10);
      const memes = selectedMemes.map((meme) => ({
        id: meme.id,
        name: meme.name,
        url: meme.url,
      }));
      setDropdownOptions(memes);
    } catch (error) {
      console.error('Error fetching options:', error);
    }
  };

  const shuffleArray = (array) => {
    const shuffledArray = [...array];
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }
    return shuffledArray;
  };

  useEffect(() => {
    fetchOptions();
  }, []);

  const handleOptionSelect = (selectedOption) => {
    const selectedMeme = dropdownOptions.find((option) => option.name === selectedOption);
    setSelectedItems([...selectedItems, selectedMeme]);
    setFilteredOptions([]);

    const selectedMemeIndex = dropdownOptions.findIndex((option) => option.name === selectedOption);
    const updatedDropdownOptions = [...dropdownOptions.slice(0, selectedMemeIndex), ...dropdownOptions.slice(selectedMemeIndex + 1)];
    setDropdownOptions(updatedDropdownOptions);
  };

  const handleRemoveItem = (itemToRemove) => {
    setSelectedItems(selectedItems.filter((item) => item !== itemToRemove));
  };

  const handleInputChange = (event) => {
    const inputValue = event.target.value;
    setInputValue(inputValue);

    const filtered = dropdownOptions.filter((option) =>
      option.name.toLowerCase().includes(inputValue.toLowerCase())
    );
    setFilteredOptions(filtered);
  };

  const handleAddItem = () => {
    if (inputValue.trim() !== '') {
      setSelectedItems([...selectedItems, { name: inputValue }]);
      setInputValue('');
    }
  };

  return (
    <VStack spacing="4">
      <ItemList items={selectedItems} displayAll={displayAll} displayCount={displayCount} handleRemoveItem={handleRemoveItem} setDisplayAll={setDisplayAll} />
      <DropdownList options={dropdownOptions} filteredOptions={filteredOptions} handleOptionSelect={handleOptionSelect} selectedItems={selectedItems} />
      <Box>
        <Box mb="2" fontWeight="bold">
          Input field:
        </Box>
        <Input
          placeholder="Type here..."
          value={inputValue}
          onChange={handleInputChange}
          onKeyPress={(e) => {
            if (e.key === 'Enter') handleAddItem();
          }}
        />
        <Button mt="2" onClick={handleAddItem}>
          +
        </Button>
      </Box>
      <Button colorScheme="purple">Save</Button>
    </VStack>
  );
};

export default InteractiveForm;
