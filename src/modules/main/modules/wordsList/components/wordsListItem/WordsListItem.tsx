import React from 'react';
import StyledWordListItem from "./style";
import {Word} from "../../../../types/word";
import PrimaryButton from "../../../../../core/components/primaryButton/PrimaryButton";
import useController from "./controller";

type Props = {
    item: Word
}
const WordsListItem = ({item: {id, value}}: Props) => {
    const {deleteItemHandler} = useController()
    return (
        <StyledWordListItem.CONTAINER>
            <StyledWordListItem.CELL>
                {value.firstWord || <>&mdash;</>}
            </StyledWordListItem.CELL>
            <StyledWordListItem.CELL>
                {value.secondWord || <>&mdash;</>}
            </StyledWordListItem.CELL>
            <StyledWordListItem.CELL>
                {value.thirdWord || <>&mdash;</>}
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
