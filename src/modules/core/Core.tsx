import React from 'react';
import {BrowserRouter} from "react-router-dom";
import CoreRouter from "./router/CoreRouter";
import GlobalStyle from "./styles";


function Core() {
    return (
        <BrowserRouter>
            <GlobalStyle/>
            <CoreRouter/>
        </BrowserRouter>
    )
}

export default Core;
