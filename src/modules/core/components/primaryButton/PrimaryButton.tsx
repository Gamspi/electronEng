import React, {ComponentProps} from 'react';
import StyledPrimaryButton from "./style";


type Props = {
} & ComponentProps<typeof StyledPrimaryButton>
const PrimaryButton = (props : Props) => {
    return (
        <StyledPrimaryButton {...props}/>
    );
};

export default PrimaryButton;
