import {EventElectronEnum} from "../utils/enums/electronEnums";
import {Word} from "../../main/types/word";
import {DateEventEnum} from "../utils/enums/dateEventEnum";
const {ipcRenderer} = window.require("electron");
const useDate = () => {
    const addWord = (arg:  Omit<Word, 'id'>  ) => {
        return new Promise<Word['id']>((resolve)=>{
            ipcRenderer.once(DateEventEnum.ADD_WORD, (_:any, response:Word['id'])=>{
                resolve(response)
            })
            ipcRenderer.send(DateEventEnum.ADD_WORD, arg)
        })
    }
    const updateWord = (event:EventElectronEnum, arg: Omit<Word, 'id'> ) => {
        return new Promise((resolve)=>{
            ipcRenderer.once(DateEventEnum.ADD_WORD, (_:any, response:any)=>{
                resolve(response)
            })
            ipcRenderer.send(event, arg)
        })
    }
    const deleteWord = (event:EventElectronEnum, arg: Word ) => {
        return new Promise((resolve)=>{
            ipcRenderer.once(DateEventEnum.ADD_WORD, (_:any, response:any)=>{
                resolve(response)
            })
            ipcRenderer.send(event, arg)
        })
    }
    return {
        addWord
    }
}

export default useDate
