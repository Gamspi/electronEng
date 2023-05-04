import React from 'react';
import StyledIconButton from "./style";
export type StyleArgsType = {
    size?: number
}
type Props =  StyleArgsType & React.ButtonHTMLAttributes<HTMLButtonElement>

const IconButton = (props: Props) => {
    return (
        <StyledIconButton.body {...props}/>
    );
};

export default IconButton;
