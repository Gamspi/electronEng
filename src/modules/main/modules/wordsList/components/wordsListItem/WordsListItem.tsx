import React from 'react';
import StyledWordListItem from "./style";
import {Word} from "../../../../types/word";
import PrimaryButton from "../../../../../core/components/primaryButton/PrimaryButton";
import useController from "./controller";
import Checkbox from "../../../../../core/components/checkbox/Checkbox";

type Props = {
    item: Word
}
const WordsListItem = ({item}: Props) => {

    const {deleteItemHandler , changeActiveHandler, value, isActive} = useController(item)
    return (
        <StyledWordListItem.CONTAINER>
            <Checkbox onChange={changeActiveHandler} checked={isActive}/>
            <StyledWordListItem.CELL>
                {value.firstWord || <>&mdash;</>}
            </StyledWordListItem.CELL>
            <StyledWordListItem.CELL>
                {value.secondWord || <>&mdash;</>}
            </StyledWordListItem.CELL>
            <StyledWordListItem.CELL>
                {value.thirdWord || <>&mdash;</>}
            </StyledWordListItem.CELL>
            <StyledWordListItem.CELL>
                {value.transcription || <>&mdash;</>}
            </StyledWordListItem.CELL>
            <StyledWordListItem.DELETE_BTN>
                <PrimaryButton onClick={deleteItemHandler}>
                    &#10008;
                </PrimaryButton>
            </StyledWordListItem.DELETE_BTN>
        </StyledWordListItem.CONTAINER>
    );
};

export default WordsListItem;
