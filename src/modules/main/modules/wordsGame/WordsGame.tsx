import React from 'react';
import PrimaryButton from "../../../core/components/primaryButton/PrimaryButton";
import useController from "./controller";
import StyledWordsGame from "./style";

const WordsGame = () => {
    const {
        isGame,
        activeWord,
        startGame,
        toBackHandler,
        nextWordHandler
    } = useController()
    return (
        <StyledWordsGame.CONTAINER>

            {!isGame ? (
                <StyledWordsGame.ACTIONS>
                    <PrimaryButton onClick={startGame}>
                        Start
                    </PrimaryButton>

                </StyledWordsGame.ACTIONS>
            ) : (
                <StyledWordsGame.BODY>
                    <StyledWordsGame.VALUE>
                        {activeWord.value}
                    </StyledWordsGame.VALUE>
                    <PrimaryButton onClick={()=>nextWordHandler()}>
                        wrong
                    </PrimaryButton>
                    <PrimaryButton onClick={()=>nextWordHandler(true)}>
                        Correctly
                    </PrimaryButton>
                </StyledWordsGame.BODY>

            )}
            <StyledWordsGame.BACK>
                <PrimaryButton onClick={toBackHandler}>
                    Back
                </PrimaryButton>
            </StyledWordsGame.BACK>

        </StyledWordsGame.CONTAINER>
    );
};

export default WordsGame;
