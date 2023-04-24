import React from 'react';
import {StyledCustomInput} from "./style";
type Props = React.InputHTMLAttributes<HTMLInputElement>
const CustomInput = (props:Props) => {
    return (
        <StyledCustomInput {...props}/>
    );
};

export default CustomInput;
