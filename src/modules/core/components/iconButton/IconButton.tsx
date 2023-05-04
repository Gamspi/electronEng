import React from 'react';
import StyledIconButton from "./style";
import {ColorType} from "../../styles/enums/colorType";
export type StyleArgsType = {
    size?: number
    colorType?: ColorType
}
type Props =  StyleArgsType & React.ButtonHTMLAttributes<HTMLButtonElement>

const IconButton = (props: Props) => {
    return (
        <StyledIconButton.body {...props}/>
    );
};

export default IconButton;
