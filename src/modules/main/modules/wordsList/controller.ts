import {useMemo, useState} from "react";
import {useNavigate} from "react-router-dom";
import {useTypeSelector} from "../../../core/hooks/useTypeSelector";
import {WordRoutesEnum} from "../../router/wordRoutesEnum";

const useController = () => {
    const [isShowAddForm, setIsShowAddForm] = useState(false)
    const {words} = useTypeSelector(state => state.words)
    const navigate = useNavigate()

    const toGameHandler = () => {
        if (!words.filter(item => item.isActive).length) {
            alert('you need some word in the list')
            return
        } else {
            navigate(WordRoutesEnum.GAME)
        }
    }

    const openAddFormHandler = () => {
        setIsShowAddForm(true)
    }
    const closeAddFormHandler = () => {
        setIsShowAddForm(false)
    }

    return {
        words,
        isShowAddForm,
        toGameHandler,
        openAddFormHandler,
        closeAddFormHandler
    }
}
export default useController
