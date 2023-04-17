import React from 'react';
import {Route, Routes} from "react-router";
import routes from "./routes";

const WordRouter = () => {
    return (
        <>
            <Routes>
                {routes.map(({path, element}) => (
                    <Route path={path} element={element} key={path}/>
                ))}
            </Routes>
        </>
    );
};

export default WordRouter;
