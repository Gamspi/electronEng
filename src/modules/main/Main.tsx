import React from 'react';
import WordRouter from "./router/WordRouter";
import useController from "./controller";

const Main = () => {
    useController()
    return (
        <WordRouter/>
    );
};

export default Main;
