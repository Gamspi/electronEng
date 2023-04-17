import React from 'react';
import {StyledWordsForm} from "./style";
import CustomInput from "../../../core/components/customInput/CustomInput";
import useController from "./controller";

const WordsForm = () => {
    const {first } = useController()

    return (
        <StyledWordsForm>
            <CustomInput value={first}/>
            <CustomInput/>
            <CustomInput/>
        </StyledWordsForm>
    );
};

export default WordsForm;
