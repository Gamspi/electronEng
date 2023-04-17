import React from 'react';
import {StyledWordsList} from "./style";
import CustomInput from "../../../core/components/customInput/CustomInput";

const WordsList = () => {
    return (
        <StyledWordsList>
            <CustomInput/>
            <CustomInput/>
            <CustomInput/>
        </StyledWordsList>
    );
};

export default WordsList;
