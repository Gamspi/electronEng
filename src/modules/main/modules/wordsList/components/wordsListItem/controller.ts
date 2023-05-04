import {useAction} from "../../../../../core/hooks/useActions";
import {Word} from "../../../../types/word";
import useDate from "../../../../../core/hooks/useDate";

const useController = ({id,value,isActive}: Word) => {
    const {removeWord,changeActive} = useAction()
    const {deleteWord} = useDate()

    const changeActiveHandler = () => {
        changeActive(id)
    }
    const deleteItemHandler = () => {
        const result = window.confirm('Are you sure?')
        if (result) {
            deleteWord(id).then((response)=>{
                if (response) removeWord(id)
            })

        }
    }
    return {
        value,
        isActive,
        deleteItemHandler,
        changeActiveHandler
    }
}
export default useController
