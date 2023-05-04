import React from 'react';
import {StyledCustomInput} from "./style";
type Props = {
    inputRef?:  React.RefObject<HTMLInputElement>
} & React.InputHTMLAttributes<HTMLInputElement>
const CustomInput = ({inputRef, ...props}:Props) => {
    return (
        <StyledCustomInput {...props} ref={inputRef}/>
    );
};

export default CustomInput;
