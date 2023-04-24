import React from 'react';
import WordsAddForm from "./components/wordsAddForm/WordsAddForm";
import useController from "./controller";
import PrimaryButton from "../../../core/components/primaryButton/PrimaryButton";
import WordsListItem from "./components/wordsListItem/WordsListItem";
import {StyledWordsListAddButton, StyledWordsListContainer} from "./style";

const WordsList = () => {
    const {
        words,
        isShowAddForm,
        openAddFormHandler,
        closeAddFormHandler
    } = useController()
    return (
        <StyledWordsListContainer>
            <WordsAddForm isOpen={isShowAddForm} closeHandler={closeAddFormHandler}/>

            {words.map(item => (
                <WordsListItem item={item} key={item.id}/>
            ))}
            <StyledWordsListAddButton>
                <PrimaryButton onClick={openAddFormHandler}>
                    Add Word
                </PrimaryButton>
            </StyledWordsListAddButton>
        </StyledWordsListContainer>
    );
};

export default WordsList;
