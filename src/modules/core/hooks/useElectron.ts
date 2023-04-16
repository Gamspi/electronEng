import {EventElectronEnum} from "../utils/enums/electronEnums";

const {ipcRenderer} = window.require("electron");


export const useElectron = () =>{

    const send = (event:EventElectronEnum ) => {
        ipcRenderer.send('close', [])
    }

    return {
        send
    }
}
