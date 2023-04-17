import React, {ComponentProps, FormEventHandler} from 'react';
import {StyledCustomInput} from "./style";

type Props = {
    isError?: boolean
} & ComponentProps<typeof StyledCustomInput>
const CustomInput = (props: Props) => {
    return (
        <StyledCustomInput {...props}/>
    );
};

export default CustomInput;
