import React from 'react';
import StyledHeader from "./style";
import useController from "./controller";
import {ColorType} from "../../styles/enums/colorType";

const Header = () => {
    const {closeHandler,openDevHandler,hideHandler, maxHandler} = useController()
    return (
        <StyledHeader.container>
            {/*<StyledHeader.button onClick={openDevHandler} colorType={ColorType.WARNING}>*/}
            {/*    D*/}
            {/*</StyledHeader.button>*/}
            <StyledHeader.button onClick={maxHandler} colorType={ColorType.SUCCESS}>
                &#10065;
            </StyledHeader.button>
            <StyledHeader.button onClick={hideHandler} colorType={ColorType.WARNING}>
                &#x2013;
            </StyledHeader.button>
            <StyledHeader.button onClick={closeHandler} colorType={ColorType.DANGER}>
                &#10008;
            </StyledHeader.button>
        </StyledHeader.container>
    );
};

export default Header ;
