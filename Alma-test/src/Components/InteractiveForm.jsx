import React, { useState, useEffect } from 'react';
import { VStack, Input, Button, Box } from '@chakra-ui/react';
import ItemList from './ItemList';
import DropdownList from './DropdownList';
import { Link } from 'react-router-dom';

const InteractiveForm = () => {
    const [selectedItems, setSelectedItems] = useState([]);
    const [dropdownOptions, setDropdownOptions] = useState([]);
    const [filteredOptions, setFilteredOptions] = useState([]);
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


    const handleFormSubmit = () => {
        localStorage.setItem('selectedItems', JSON.stringify(selectedItems));
        console.log('Form submitted:', selectedItems);
    };

    return (
        <VStack spacing="4">
            <DropdownList options={dropdownOptions} filteredOptions={filteredOptions} handleOptionSelect={handleOptionSelect} selectedItems={selectedItems} />
            <ItemList items={selectedItems} displayAll={displayAll} displayCount={displayCount} handleRemoveItem={handleRemoveItem} setDisplayAll={setDisplayAll} />

            <Box width="100%">
            </Box>
            <Link to="/"><Button mb="1rem" colorScheme="purple" onClick={handleFormSubmit}>Save</Button></Link>
        </VStack>
    );
};

export default InteractiveForm;
