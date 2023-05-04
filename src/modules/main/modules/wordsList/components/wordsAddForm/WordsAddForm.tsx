import React from 'react';
import {StyledWordsForm, StyledWordsFormContainer} from "./style";

import useController from "./controller";
import CustomInput from "../../../../../core/components/customInput/CustomInput";
import PrimaryButton from "../../../../../core/components/primaryButton/PrimaryButton";



type Props = {
}
const WordsAddForm = ({}:Props) => {
    const {
        firstWord,
        thirdWord,
        secondWord,
        updateFirstWord,
        updateThirdWord,
        updateSecondWord,
        formSubmitHandler
    } = useController()

    return (

        <StyledWordsFormContainer >
            <StyledWordsForm onSubmit={formSubmitHandler}>
                <CustomInput value={firstWord} onInput={updateFirstWord} placeholder='First form'/>
                <CustomInput value={secondWord} onInput={updateSecondWord} placeholder='second form'/>
                <CustomInput value={thirdWord} onInput={updateThirdWord} placeholder='third form'/>
                <PrimaryButton type='submit'>
                    Add
                </PrimaryButton>
            </StyledWordsForm>
        </StyledWordsFormContainer>

    );
};

export default WordsAddForm;
