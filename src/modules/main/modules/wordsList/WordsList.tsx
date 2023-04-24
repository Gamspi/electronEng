import React from 'react';
import WordsAddForm from "./components/wordsAddForm/WordsAddForm";
import useController from "./controller";
import PrimaryButton from "../../../core/components/primaryButton/PrimaryButton";
import WordsListItem from "./components/wordsListItem/WordsListItem";

const WordsList = () => {
    const {
        words,
        isShowAddForm,
        openAddFormHandler,
        closeAddFormHandler
    } = useController()
    return (
        <div>
            <WordsAddForm isOpen={isShowAddForm} closeHandler={closeAddFormHandler}/>
            <PrimaryButton onClick={openAddFormHandler}>
                Add Word
            </PrimaryButton>

                {words.map(item => (
                    <WordsListItem item={item} key={item.id}/>
                ))}
        </div>
    );
};

export default WordsList;
