import {useMemo} from "react";
import {useNavigate} from "react-router-dom";
import {useTypeSelector} from "../../../core/hooks/useTypeSelector";
import {WordRoutesEnum} from "../../router/wordRoutesEnum";


const useController = () => {
    const {words} = useTypeSelector(state => state.words)
    const navigate = useNavigate()
    const sortedWords = useMemo(() => {
        return words
    }, [words])

    const toGameHandler = () => {
        if (!words.filter(item => item.isActive).length) {
            alert('You need some active words in the list')
            return
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
