import React from 'react';
import {BrowserRouter} from "react-router-dom";
import CoreRouter from "./router/CoreRouter";

function Core() {
    return (
        <BrowserRouter>
            <CoreRouter/>
        </BrowserRouter>
    )
}

export default Core;
