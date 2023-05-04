import React from 'react';
import PrimaryButton from "../../../core/components/primaryButton/PrimaryButton";
import useController from "./controller";
import StyledWordsGame from "./style";
import IconButton from "../../../core/components/iconButton/IconButton";
import {ColorType} from "../../../core/styles/enums/colorType";

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
                    <IconButton onClick={startGame} size={60}>
                        <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24"  viewBox="0 0 24 24"  fill="#000000"><rect fill="none" height="24" width="24"/><path d="M11.71,17.99C8.53,17.84,6,15.22,6,12c0-3.31,2.69-6,6-6c3.22,0,5.84,2.53,5.99,5.71l-2.1-0.63C15.48,9.31,13.89,8,12,8 c-2.21,0-4,1.79-4,4c0,1.89,1.31,3.48,3.08,3.89L11.71,17.99z M22,12c0,0.3-0.01,0.6-0.04,0.9l-1.97-0.59C20,12.21,20,12.1,20,12 c0-4.42-3.58-8-8-8s-8,3.58-8,8s3.58,8,8,8c0.1,0,0.21,0,0.31-0.01l0.59,1.97C12.6,21.99,12.3,22,12,22C6.48,22,2,17.52,2,12 C2,6.48,6.48,2,12,2S22,6.48,22,12z M18.23,16.26L22,15l-10-3l3,10l1.26-3.77l4.27,4.27l1.98-1.98L18.23,16.26z"/></svg>
                    </IconButton>

                </StyledWordsGame.ACTIONS>
            ) : (
                <StyledWordsGame.BODY>
                    <StyledWordsGame.VALUE>
                        {activeWord.value}
                    </StyledWordsGame.VALUE>
                    <StyledWordsGame.Actions>
                        <IconButton onClick={()=>nextWordHandler()} colorType={ColorType.DANGER} size={56}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#000000"><path d="M0 0h24v24H0z" fill="none"/><path d="M12 5V1L7 6l5 5V7c3.31 0 6 2.69 6 6s-2.69 6-6 6-6-2.69-6-6H4c0 4.42 3.58 8 8 8s8-3.58 8-8-3.58-8-8-8z"/></svg>                        </IconButton>
                        <IconButton onClick={()=>nextWordHandler(true)} colorType={ColorType.SUCCESS} size={56}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#000000"><path d="M0 0h24v24H0z" fill="none"/><path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"/></svg>
                        </IconButton>
                    </StyledWordsGame.Actions>

                </StyledWordsGame.BODY>

            )}
            <StyledWordsGame.BACK>
                <PrimaryButton onClick={toBackHandler}>
                    <svg xmlns="http://www.w3.org/2000/svg" height="2.4rem" viewBox="0 0 24 24" width="2.4rem" fill="#000000"><path d="M0 0h24v24H0z" fill="none"/><path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/></svg>
                </PrimaryButton>
            </StyledWordsGame.BACK>

        </StyledWordsGame.CONTAINER>
    );
};

export default WordsGame;
