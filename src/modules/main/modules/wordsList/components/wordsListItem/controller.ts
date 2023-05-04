import {useAction} from "../../../../../core/hooks/useActions";
import {Word} from "../../../../types/word";
import useDate from "../../../../../core/hooks/useDate";
import {useElectron} from "../../../../../core/hooks/useElectron";

const useController = ({id, value, isActive}: Word) => {
    const {removeWord, changeActive} = useAction()
    const {deleteWord} = useDate()
    const {Confirm} = useElectron()

    const changeActiveHandler = () => {
        changeActive(id)
    }
    const deleteItemHandler = () => {
        Confirm('Are you sure?').then((value) => {
            console.log(value)
            if (value) {
                deleteWord(id).then((response) => {
                    if (response) removeWord(id)
                })

            }

        })

    }
    return {
        value,
        isActive,
        deleteItemHandler,
        changeActiveHandler
    }
}
export default useController
