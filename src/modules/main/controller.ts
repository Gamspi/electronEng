import useDate from "../core/hooks/useDate";
import {useEffect} from "react";
import {Word} from "./types/word";
import {useAction} from "../core/hooks/useActions";

const useController = () => {
    const {getWords} = useDate()
    const {updateList} = useAction()
    useEffect(()=>{
        getWords().then((response)=>{
            console.log(response)
            updateList(response as Word[])
        })
    }, [])
}

export default useController
