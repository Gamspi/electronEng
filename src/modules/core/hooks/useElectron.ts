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
    const Alert = (args: {title:string, content:string}) => {
        return new Promise((resolve) => {
            ipcRenderer.once('ALERT', () => {
                resolve(true)
            })
            ipcRenderer.send('ALERT', args)
        })

    }
    const Confirm = <T>(content?: string) => {
        return new Promise((resolve) => {
            ipcRenderer.once('CONFIRM', (_: any, args: boolean) => {
                resolve(args)
            })
            ipcRenderer.send('CONFIRM', {content})
        })
    }
    return {
        send,
        Alert,
        Confirm
    }
}
