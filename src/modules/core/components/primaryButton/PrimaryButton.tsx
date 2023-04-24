import React from 'react';
import StyledPrimaryButton from "./style";
type Props =  React.ButtonHTMLAttributes<HTMLButtonElement>
const PrimaryButton = (props : Props) => {
    return (
        <StyledPrimaryButton {...props}/>
    );
};

export default PrimaryButton;
