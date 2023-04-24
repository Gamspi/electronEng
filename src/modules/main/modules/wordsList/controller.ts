import {useState} from "react";
import {useTypeSelector} from "../../../core/hooks/useTypeSelector";

const useController = () => {
    const [isShowAddForm, setIsShowAddForm] = useState(false)
    const {words} = useTypeSelector(state => state.words)

    const openAddFormHandler = () => {
        setIsShowAddForm(true)
    }
    const closeAddFormHandler = () => {
        setIsShowAddForm(false)
    }

    return {
        words,
        isShowAddForm,
        openAddFormHandler,
        closeAddFormHandler
    }
}
export default useController
