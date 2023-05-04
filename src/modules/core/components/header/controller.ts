import {useElectron} from "../../hooks/useElectron";
import {EventElectronEnum} from "../../utils/enums/electronEnums";

const useController = () =>{
    const {send} =useElectron()
    const closeHandler = () =>{
        void send(EventElectronEnum.CLOSE)
    }
    const openDevHandler = () =>{
        void send(EventElectronEnum.DEV)
    }
    const hideHandler = () =>{
        void send(EventElectronEnum.HIDE)
    }
    return {
        hideHandler,
        closeHandler,
        openDevHandler
    }
}

export default useController
