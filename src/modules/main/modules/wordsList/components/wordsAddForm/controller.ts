import {ChangeEvent, useRef, useState, MouseEvent} from "react";
import {useAction} from "../../../../../core/hooks/useActions";

const useController = () => {
    const [firstWord, setFirstWord] = useState('')
    const [secondWord, setSecondWord] = useState('')
    const [thirdWord, setThirdWord] = useState('')
    const containerRef = useRef<HTMLDivElement>(null)
    const {addWord} = useAction()
    const closeForm = () => {
        setFirstWord('')
        setSecondWord('')
        setThirdWord('')
    }
    const closeFormHandler = (e: MouseEvent<HTMLDivElement>) => {
        if (containerRef.current === e.target) {
            closeForm()
        }
    }

    const checkValid = () => {
        return (firstWord.trim() || secondWord.trim() || thirdWord.trim())
    }
    const formSubmitHandler = (e: ChangeEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (checkValid()) {
            addWord(
                {
                    id: Date.now(),
                    isActive: true,
                    value: {
                        firstWord,
                        secondWord,
                        thirdWord
                    }
                }
            )
            closeForm()
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
        containerRef,
        updateFirstWord,
        updateThirdWord,
        updateSecondWord,
        closeFormHandler,
        formSubmitHandler
    }
}
export default useController
