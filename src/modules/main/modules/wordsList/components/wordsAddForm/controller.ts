import {FormEvent, useState} from "react";

const useController = () => {
    const [firstWord, setFirstWord] = useState({isError: false, value: ''})
    const [secondWord, setSecondWord] = useState({isError: false, value: ''})
    const [thirdWord, setThirdWord] = useState({isError: false, value: ''})

    const setFirstWordHandler = (e: Event) => {
        const target = e.target as HTMLInputElement
        setFirstWord(perv => ({...perv, value: target.value}))
    }
    const setSecondWordHandler = (e: Event) => {
        const target = e.target as HTMLInputElement
        setSecondWord(perv => ({...perv, value: target.value}))
    }
    const setThirdWordHandler = (e: Event) => {
        const target = e.target as HTMLInputElement
        setThirdWord(perv => ({...perv, value: target.value}))
    }
    const checkValid = () =>{
        let isValid = true
        if (!firstWord.value.trim()) {
            isValid = false
            setFirstWord(perv => ({...perv, isError: true}))
        }
        if (!secondWord.value.trim()) {
            isValid = false
            setSecondWord(perv => ({...perv, isError: true}))
        }
        if (!thirdWord.value.trim()) {
            isValid = false
            setThirdWord(perv => ({...perv, isError: true}))
        }
        return isValid
    }
    const submitHandler = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (checkValid()){
            setFirstWord(perv => ({...perv, value: ''}))
            setSecondWord(perv => ({...perv, value: ''}))
            setThirdWord(perv => ({...perv, value: ''}))
        }

    }


    return {
        firstWord,
        thirdWord,
        secondWord,
        submitHandler,
        setFirstWordHandler,
        setThirdWordHandler,
        setSecondWordHandler
    }
}
export default useController
