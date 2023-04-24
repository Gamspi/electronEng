import React from 'react';
import StyledWordListItem from "./style";
import {Word} from "../../../../types/word";
import PrimaryButton from "../../../../../core/components/primaryButton/PrimaryButton";
import useController from "./controller";

type Props = {
    item: Word
}
const WordsListItem = ({item: {id, firstWord, thirdWord, secondWord}}: Props) => {
    const {deleteItemHandler} = useController()
    return (
        <StyledWordListItem.CONTAINER>
            <StyledWordListItem.CELL>
                {firstWord || <>&mdash;</>}
            </StyledWordListItem.CELL>
            <StyledWordListItem.CELL>
                {secondWord || <>&mdash;</>}
            </StyledWordListItem.CELL>
            <StyledWordListItem.CELL>
                {thirdWord || <>&mdash;</>}
            </StyledWordListItem.CELL>
            <StyledWordListItem.DELETE_BTN>
                <PrimaryButton onClick={() => deleteItemHandler(id)}>
                    &#10008;
                </PrimaryButton>
            </StyledWordListItem.DELETE_BTN>
        </StyledWordListItem.CONTAINER>
    );
};

export default WordsListItem;
