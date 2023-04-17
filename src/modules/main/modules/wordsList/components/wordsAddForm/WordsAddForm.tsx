import React from 'react';
import {StyledWordsForm} from "./style";
import CustomInput from "../../../../../core/components/customInput/CustomInput";
import useController from "./controller";
import PrimaryButton from "../../../../../core/components/primaryButton/PrimaryButton";

const WordsForm = () => {
    const {
        firstWord,
        thirdWord,
        secondWord,
        submitHandler,
        setFirstWordHandler,
        setThirdWordHandler,
        setSecondWordHandler,
    } = useController()

    return (
        <StyledWordsForm onSubmit={submitHandler}>
            <CustomInput value={firstWord.value} isError={firstWord.isError} onInput={setFirstWordHandler}/>
            <CustomInput value={secondWord.value} isError={secondWord.isError} onInput={setSecondWordHandler}/>
            <CustomInput value={thirdWord.value} isError={thirdWord.isError} onInput={setThirdWordHandler}/>
            <PrimaryButton type='submit'>
                Add item
            </PrimaryButton>
        </StyledWordsForm>
    );
};

export default WordsForm;
