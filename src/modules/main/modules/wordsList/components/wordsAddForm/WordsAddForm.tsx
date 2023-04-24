import React from 'react';
import {StyledWordsForm, StyledWordsFormContainer} from "./style";

import useController from "./controller";
import CustomInput from "../../../../../core/components/customInput/CustomInput";
import PrimaryButton from "../../../../../core/components/primaryButton/PrimaryButton";



type Props = {
    isOpen: boolean
    closeHandler: () => void
}
const WordsAddForm = ({isOpen, closeHandler}:Props) => {
    const {
        firstWord,
        thirdWord,
        secondWord,
        containerRef,
        updateFirstWord,
        updateThirdWord,
        updateSecondWord,
        closeFormHandler,
        formSubmitHandler
    } = useController({closeHandler})

    return (
        isOpen ?
        <StyledWordsFormContainer onClick={closeFormHandler} ref={containerRef}>
            <StyledWordsForm onSubmit={formSubmitHandler}>
                <CustomInput value={firstWord} onInput={updateFirstWord}/>
                <CustomInput value={secondWord} onInput={updateSecondWord}/>
                <CustomInput value={thirdWord} onInput={updateThirdWord}/>
                <PrimaryButton type='submit'>
                    Add
                </PrimaryButton>
            </StyledWordsForm>
        </StyledWordsFormContainer>
        : null
    );
};

export default WordsAddForm;
