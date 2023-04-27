import React from 'react';
import StyledCheckbox from "./style";

type Props = React.InputHTMLAttributes<HTMLInputElement>
const Checkbox = (props: Props) => {
    return (
        <StyledCheckbox.INPUT {...props} type='checkbox'/>
    );
};

export default Checkbox;
