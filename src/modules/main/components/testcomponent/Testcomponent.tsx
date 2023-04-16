import React from 'react';
import {useElectron} from "../../../core/hooks/useElectron";
import {EventElectronEnum} from "../../../core/utils/enums/electronEnums";
import PrimaryButton from "../../../core/components/primaryButton/PrimaryButton";
import {useTypeSelector} from "../../../core/hooks/useTypeSelector";


const Testcomponent = () => {
    const {error} = useTypeSelector(state => state.posts)
    const {send} = useElectron()
    const quitHandler = () => {
send(EventElectronEnum.CLOSE)
    }

    return (
        <div>
            {error}
            <PrimaryButton onClick={quitHandler}>exit</PrimaryButton>
        </div>
    );
};

export default Testcomponent;
