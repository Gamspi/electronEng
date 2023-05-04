import { useMemo } from "react";
import {useNavigate} from "react-router-dom";
import {useTypeSelector} from "../../../core/hooks/useTypeSelector";
import {WordRoutesEnum} from "../../router/wordRoutesEnum";
import {useElectron} from "../../../core/hooks/useElectron";


const useController = () => {
    const {words} = useTypeSelector(state => state.words)
    const navigate = useNavigate()
    const {Alert} = useElectron()
    const sortedWords = useMemo(() => {
        return words
    }, [words])

    const toGameHandler = () => {
        if (!words.filter(item => item.isActive).length) {
            return Alert({title: '',content:'You need active words in the list'})
        } else {
            navigate(WordRoutesEnum.GAME)
        }
    }

    return {
        sortedWords,
        toGameHandler,
    }
}
export default useController
