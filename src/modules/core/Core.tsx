import React from 'react';
import {Provider} from 'react-redux';
import {BrowserRouter} from "react-router-dom";
import CoreRouter from "./router/CoreRouter";
import GlobalStyle from "./styles";
import store from './store/store';

function Core() {
    return (
        <Provider store={store}>
        <BrowserRouter>
            <GlobalStyle/>
            <CoreRouter/>
        </BrowserRouter>
        </Provider>
    )
}

export default Core;
