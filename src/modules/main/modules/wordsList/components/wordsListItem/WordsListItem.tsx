import React from 'react';
import {StyledWordLostItemCell, StyledWordLostItemContainer} from "./style";
import {Word} from "../../../../types/word";
type Props = {
    item: Word
}
const WordsListItem = ({item: {firstWord, thirdWord,secondWord}}: Props) => {
    return (
        <StyledWordLostItemContainer>
            <StyledWordLostItemCell>
                {firstWord}
            </StyledWordLostItemCell>
            <StyledWordLostItemCell>
                {secondWord || <>&mdash;</>}
            </StyledWordLostItemCell>
            <StyledWordLostItemCell>
                {thirdWord || <>&mdash;</>}
            </StyledWordLostItemCell>
        </StyledWordLostItemContainer>
    );
};

export default WordsListItem;
