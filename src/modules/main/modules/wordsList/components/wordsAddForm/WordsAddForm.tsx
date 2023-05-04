import React from 'react';
import StyledWordsForm from "./style";

import useController from "./controller";
import CustomInput from "../../../../../core/components/customInput/CustomInput";
import PrimaryButton from "../../../../../core/components/primaryButton/PrimaryButton";


type Props = {}
const WordsAddForm = ({}: Props) => {
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

        <StyledWordsForm.Container>
            <StyledWordsForm.Form onSubmit={formSubmitHandler}>
                <StyledWordsForm.Input>
                    <CustomInput value={firstWord} onInput={updateFirstWord} placeholder='First form'/>

                </StyledWordsForm.Input>
                <StyledWordsForm.Input>
                    <CustomInput value={secondWord} onInput={updateSecondWord} placeholder='second form'/>

                </StyledWordsForm.Input>
                <StyledWordsForm.Input>
                    <CustomInput value={thirdWord} onInput={updateThirdWord} placeholder='third form'/>

                </StyledWordsForm.Input>
                <StyledWordsForm.Button>
                    <PrimaryButton type='submit'>
                        Add
                    </PrimaryButton>
                </StyledWordsForm.Button>

            </StyledWordsForm.Form>
        </StyledWordsForm.Container>

    );
};

export default WordsAddForm;
