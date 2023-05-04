import {ChangeEvent, useRef, useState, MouseEvent} from "react";
import {useAction} from "../../../../../core/hooks/useActions";
import useDate from "../../../../../core/hooks/useDate";
import {useTypeSelector} from "../../../../../core/hooks/useTypeSelector";
import {useElectron} from "../../../../../core/hooks/useElectron";

const useController = () => {
    const {addWord: dateAddWord} = useDate()
    const [firstWord, setFirstWord] = useState('')
    const [secondWord, setSecondWord] = useState('')
    const [thirdWord, setThirdWord] = useState('')
    const [transcription, setTranscription] = useState('')
    const firstInput = useRef<HTMLInputElement>(null)
    const {addWord} = useAction()
    const {Alert} = useElectron()

    const checkValid = () => {
        return (firstWord.trim() && transcription.trim() && (secondWord.trim() || thirdWord.trim()))
    }
    const clearForm = () => {
        setFirstWord('')
        setSecondWord('')
        setThirdWord('')
        setTranscription('')
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
                    thirdWord,
                    transcription
                }
            }
            dateAddWord(value).then((result) => {
                addWord({
                    ...value,
                    id: result
                })
                clearForm()
                if (firstInput.current) firstInput.current.focus()
            })
        } else {
            void Alert({title:'', content: 'invalid form'})
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
    const updateTranscription = (e: ChangeEvent<HTMLInputElement>) => {
        setTranscription(e.target.value)
    }
    return {
        firstWord,
        thirdWord,
        secondWord,
        firstInput,
        transcription,
        updateFirstWord,
        updateThirdWord,
        updateSecondWord,
        formSubmitHandler,
        updateTranscription
    }
}
export default useController
