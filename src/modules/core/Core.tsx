import React from 'react';
import {Provider} from 'react-redux';
import {HashRouter} from "react-router-dom";
import GlobalStyle from "./styles";
import store from './store/store';
import CoreLayout from "./layout/CoreLayout";

function Core() {
    return (
        <Provider store={store}>
            <HashRouter>
                <GlobalStyle/>
                <CoreLayout/>
            </HashRouter>
        </Provider>
    )
}

export default Core;
