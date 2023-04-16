import React from 'react';
import StyledPrimaryButton from "./style";
type Props = {
    children?: React.ReactElement | string
    onClick: ()=> void
}
const PrimaryButton = (props : Props) => {
    return (
        <StyledPrimaryButton {...props}/>
    );
};

export default PrimaryButton;
