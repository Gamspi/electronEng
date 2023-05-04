import {EventElectronEnum} from "../utils/enums/electronEnums";

const {ipcRenderer} = window.require("electron");


export const useElectron = () => {

    const send = <T>(event: EventElectronEnum, arg?: string) => {
        return new Promise((resolve) => {
            ipcRenderer.once(event, (_: any, args: T) => {
                resolve(args)
            })
            ipcRenderer.send(event, arg)
        })
    }
    const Alert = () => {
        return new Promise((resolve) => {
            ipcRenderer.once('DIALOG', (_: any, args: any) => {
                resolve(args)
            })
            ipcRenderer.send('DIALOG')
        })
    }

    return {
        send,
        Alert
    }
}
