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
    const deleteWord = (arg: Word['id'] ) => {
        return new Promise((resolve)=>{
            ipcRenderer.once(DateEventEnum.REMOVE_WORD, (_:any, response:any)=>{
                resolve(response)
            })
            ipcRenderer.send(DateEventEnum.REMOVE_WORD, arg)
        })
    }
    const getWords = () => {
        return new Promise((resolve)=>{
            ipcRenderer.once(DateEventEnum.GET_WORDS, (_:any, response:any)=>{
                resolve(response)
            })
            ipcRenderer.send(DateEventEnum.GET_WORDS)
        })
    }
    const changeActiveWord = (args: {id: Word['id'], isActive: boolean}) => {
        return new Promise((resolve)=>{
            ipcRenderer.once(DateEventEnum.CHANGE_ACTIVE_WORDS, (_:any, response:any)=>{
                resolve(response)
            })
            ipcRenderer.send(DateEventEnum.CHANGE_ACTIVE_WORDS, args)
        })
    }
    return {
        addWord,
        getWords,
        deleteWord,
        changeActiveWord
    }
}

export default useDate
