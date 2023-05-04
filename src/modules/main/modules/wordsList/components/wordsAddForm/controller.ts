import {ChangeEvent, useRef, useState, MouseEvent} from "react";
import {useAction} from "../../../../../core/hooks/useActions";
import useDate from "../../../../../core/hooks/useDate";
import {useTypeSelector} from "../../../../../core/hooks/useTypeSelector";

const useController = () => {
    const {addWord: dateAddWord} = useDate()
    const [firstWord, setFirstWord] = useState('')
    const [secondWord, setSecondWord] = useState('')
    const [thirdWord, setThirdWord] = useState('')
    const {addWord} = useAction()

    const checkValid = () => {
        return (firstWord.trim() && (secondWord.trim() || thirdWord.trim()))
    }
    const clearForm = () => {
        setFirstWord('')
        setSecondWord('')
        setThirdWord('')
    }
    const formSubmitHandler = (e: ChangeEvent<HTMLFormElement>) => {
        e.preventDefault()
        e.stopPropagation()
        if (checkValid()) {
            const value = {
                isActive: true,
                value: {
                    firstWord,
                    secondWord,
                    thirdWord
                }
            }
            dateAddWord(value).then((result) => {
                addWord({
                    ...value,
                    id: result
                })
                clearForm()
            })
        } else {
            alert('No valid form')
        }
    }


    const updateFirstWord = (e: ChangeEvent<HTMLInputElement>) => {
        setFirstWord(e.target.value)
    }
    const updateSecondWord = (e: ChangeEvent<HTMLInputElement>) => {
        setSecondWord(e.target.value)
    }
    const updateThirdWord = (e: ChangeEvent<HTMLInputElement>) => {
        setThirdWord(e.target.value)
    }
    return {
        firstWord,
        thirdWord,
        secondWord,
        updateFirstWord,
        updateThirdWord,
        updateSecondWord,
        formSubmitHandler
    }
}
export default useController
