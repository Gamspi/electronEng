import {useAction} from "../../../../../core/hooks/useActions";
import {Word} from "../../../../types/word";

const useController = () => {
    const {removeWord} = useAction()
    const deleteItemHandler = (id: Word['id']) => {
        removeWord(id)
    }
    return {
        deleteItemHandler
    }
}
export default useController
