import {useAction} from "../../../../../core/hooks/useActions";
import {Word} from "../../../../types/word";

const useController = ({id,value,isActive}: Word) => {
    const {removeWord,changeActive} = useAction()

    const changeActiveHandler = () => {
        changeActive(id)
    }
    const deleteItemHandler = () => {
        const result = window.confirm('Are you sure?')
        if (result) removeWord(id)
    }
    return {
        value,
        isActive,
        deleteItemHandler,
        changeActiveHandler
    }
}
export default useController
