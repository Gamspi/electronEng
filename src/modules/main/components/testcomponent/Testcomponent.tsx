import React from 'react';
import {useElectron} from "../../../core/hooks/useElectron";
import {EventElectronEnum} from "../../../core/utils/enums/electronEnums";
import PrimaryButton from "../../../core/components/primaryButton/PrimaryButton";


const Testcomponent = () => {
    const {send} = useElectron()
    const quitHandler = () => {
send(EventElectronEnum.CLOSE)
    }

    return (
        <div>
            <PrimaryButton onClick={quitHandler}>exit</PrimaryButton>
        </div>
    );
};

export default Testcomponent;
