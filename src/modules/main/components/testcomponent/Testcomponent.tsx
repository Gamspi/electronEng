import React from 'react';
import {useElectron} from "../../../core/hooks/useElectron";
import {EventElectronEnum} from "../../../core/utils/enums/electronEnums";


const Testcomponent = () => {
    const {send} = useElectron()
    const quitHandler = () => {
send(EventElectronEnum.CLOSE)
    }

    return (
        <div>
            <button onClick={quitHandler}>exit</button>
        </div>
    );
};

export default Testcomponent;
