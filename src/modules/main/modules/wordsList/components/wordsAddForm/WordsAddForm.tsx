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
        firstInput,
        transcription,
        updateFirstWord,
        updateThirdWord,
        updateSecondWord,
        formSubmitHandler,
        updateTranscription,
    } = useController()

    return (

        <StyledWordsForm.Container>
            <StyledWordsForm.Form onSubmit={formSubmitHandler}>
                <StyledWordsForm.Button>
                    <PrimaryButton>
                    </PrimaryButton>
                </StyledWordsForm.Button>
                <StyledWordsForm.Input>
                    <CustomInput value={firstWord} onInput={updateFirstWord} placeholder='Infinitive'
                                 inputRef={firstInput}/>
                </StyledWordsForm.Input>
                <StyledWordsForm.Input>
                    <CustomInput value={secondWord} onInput={updateSecondWord} placeholder='Past Simple'/>
                </StyledWordsForm.Input>
                <StyledWordsForm.Input>
                    <CustomInput value={thirdWord} onInput={updateThirdWord} placeholder='Past Participle'/>
                </StyledWordsForm.Input>
                <StyledWordsForm.Input>
                    <CustomInput value={transcription} onInput={updateTranscription} placeholder='Translation'/>
                </StyledWordsForm.Input>
            </StyledWordsForm.Form>
        </StyledWordsForm.Container>

    );
};

export default WordsAddForm;
