import React from 'react';
import { Box, Heading, Text, UnorderedList, ListItem, OrderedList } from '@chakra-ui/react';

const LongText = () => {
    return (
        <Box mt="8" mb="8" px="4">
            <Heading size="sm" mb="4">Frontend challenge</Heading>
            <Text lineHeight="1.6">
                <OrderedList>
                    <ListItem>Build a 2-page React application with the following items:</ListItem>
                    <UnorderedList>
                        <ListItem>Basic navigation bar with a logo and a company name.</ListItem>
                        <ListItem>Page title that changes dynamically based on current selected route.</ListItem>
                        <ListItem>Navigation items – a way to transition between the pages.</ListItem>
                    </UnorderedList>
                    <ListItem>First page includes a welcome message and a centered action button that allows transition to the second page.</ListItem>
                    <ListItem>Second page should include a header and a very long text (The page should be scrollable) and a floating action button that always maintains its position on top of the text.</ListItem>
                    <UnorderedList>
                        <ListItem>A click on the action button animates a popup modal, height 50% of screen height, and width 50% of the screen width.</ListItem>
                        <ListItem>The modal is centered regardless of screen scrolling state.</ListItem>
                        <ListItem> * The modal should transition between open and closed states with an animation, and clicking outside of the modal closes it.</ListItem>
                        <ListItem>The Modal should include an interactive form with:</ListItem>
                        <OrderedList>
                            <ListItem>A list of “Selected items”.</ListItem>
                            <UnorderedList>
                                <ListItem>The list can hold a maximum of 6 selected items.</ListItem>
                                <ListItem>Each selected item has a button for removing it from the selected items list.</ListItem>
                                <ListItem> * The list only shows the first 3 selected items. If more than 3 are selected, a “show more” button will appear, and the list will be expandable.</ListItem>
                            </UnorderedList>
                            <ListItem>A dropdown with 10 options.</ListItem>
                            <UnorderedList>
                                <ListItem>Selecting an option will remove it from the dropdown available options and add it to the selected items list.</ListItem>
                                <ListItem>expanding the dropdown should not impact the position of other components.</ListItem>
                                <ListItem>Maximum height of the expanded dropdown should be the height of 5 options.</ListItem>
                                <ListItem> * Fill the dropdown with the names received when performing a GET request to the address https://api.imgflip.com/get_memes. Display the image of selected items in the selected items list (if exists).</ListItem>
                            </UnorderedList>
                            <ListItem>An input field.</ListItem>
                            <UnorderedList>
                                <ListItem>Typing in the input field will filter the options shown in the dropdown and present a + button next to it.</ListItem>
                                <ListItem>Clicking the + button or the Enter key when the input field is not empty will add the text entered to the selected items list and clear the input field.</ListItem>
                                <ListItem>A ‘Save’ button for submitting the form.</ListItem>
                            </UnorderedList>
                            <ListItem>After submitting the form:</ListItem>
                        </OrderedList>
                        <UnorderedList>
                            <ListItem>The user will be redirected to the first page and the welcome text will be changed to display the options the user selected in the form.</ListItem>
                            <ListItem>The button will now say “Reset” and clicking it will reset the application to its original state.</ListItem>
                            <ListItem>On refresh, the first page should remember its state and display the selected options.</ListItem>
                        </UnorderedList>
                    </UnorderedList>
                    <ListItem>* Design the application using a UI framework.</ListItem>
                    <UnorderedList>
                        <ListItem>You may use any tool or plugin you find helpful as long as it doesn’t implement the main functionality requested, and only serves as a ’helper’.</ListItem>
                        <ListItem>The design of the application may be basic, but it must be pleasing to the eye.</ListItem>
                        <ListItem>Sections marked with an asterisk (*) are Bonus. Leave them to the end.</ListItem>
                    </UnorderedList>
                </OrderedList>
            </Text>
        </Box>
    );
};

export default LongText;
