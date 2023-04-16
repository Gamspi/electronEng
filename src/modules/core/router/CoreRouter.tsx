import React from 'react';
import {Route, Routes} from "react-router";
import routes from "./routes";
import Main from "../../main/Main";

const CoreRouter = () => {
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

export default CoreRouter;
