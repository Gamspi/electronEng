import React from 'react';
import WordsAddForm from "./components/wordsAddForm/WordsAddForm";
import useController from "./controller";
import PrimaryButton from "../../../core/components/primaryButton/PrimaryButton";
import WordsListItem from "./components/wordsListItem/WordsListItem";
import StyledWordsList from "./style";

const WordsList = () => {
    const {
        sortedWords,
        toGameHandler,
    } = useController()
    return (
        <StyledWordsList.CONTAINER>
            <WordsAddForm/>
            <StyledWordsList.BODY>
                {sortedWords.map(item => (
                    <WordsListItem item={item} key={item.id}/>
                ))}
            </StyledWordsList.BODY>
            <StyledWordsList.ACTIONS>
                <PrimaryButton onClick={toGameHandler}>
                    Game
                </PrimaryButton>
            </StyledWordsList.ACTIONS>
        </StyledWordsList.CONTAINER>
    );
};

export default WordsList;
