import React from 'react';
import {StyledCustomInput} from "./style";
type Props = {
    value?: string

}
const CustomInput = (props:Props) => {
    return (
        <StyledCustomInput {...props}/>
    );
};

export default CustomInput;
