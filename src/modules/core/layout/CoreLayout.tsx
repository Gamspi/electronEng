import React from 'react';
import CoreRouter from "../router/CoreRouter";
import StyledCoreLayout from "./style";
import Header from "../components/header/Header";


const CoreLayout = () => {
    return (
        <StyledCoreLayout.container>
            <StyledCoreLayout.header>
                <Header/>
            </StyledCoreLayout.header>
            <StyledCoreLayout.content>
            <CoreRouter/>
            </StyledCoreLayout.content>
        </StyledCoreLayout.container>
    );
};

export default CoreLayout;
