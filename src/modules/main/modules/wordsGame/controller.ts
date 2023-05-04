import {useNavigate} from "react-router-dom";
import {WordRoutesEnum} from "../../router/wordRoutesEnum";
import {useCallback, useEffect, useMemo, useState} from "react";
import {useTypeSelector} from "../../../core/hooks/useTypeSelector";
import {getRandom} from "../../../core/helper/getRandom";
import {useElectron} from "../../../core/hooks/useElectron";

const useController = () => {
    const navigate = useNavigate()
    const {words} = useTypeSelector(state => state.words)
    const [isGame, setIsGame] = useState(false)
    const defaultWords = useMemo(() => words.filter(item => item.isActive), [words])
    const [wordsValues, setWordsValues] = useState(defaultWords)
    const {Alert} = useElectron()

    const activeWord = useMemo(() => {
        if (wordsValues.length) {
            const word = wordsValues[getRandom(wordsValues.length)]
            const values = Object.values(word.value).filter(item => item)
            const value = values[getRandom(values.length)]
            return {
                id: word.id,
                value
            }
        }
        return {
            id: '',
            value: 'win'
        }
    }, [wordsValues])
    const nextWordHandler = (isCorrectly?: boolean) => {
        if (isCorrectly) {
            setWordsValues(prev => prev.filter(item => item.id !== activeWord.id))
        } else {
            setWordsValues(prev => prev.map(item => item))
        }
    }
    const toBackHandler = () => {
        setIsGame(false)
        navigate(WordRoutesEnum.BASE)
    }
    const startGame = () => {
        setIsGame(true)
    }
    useEffect(() => {
        if (!wordsValues.length) {
            Alert({content:'You won', title: ''}).then(()=>{
                setIsGame(false)
                setWordsValues(defaultWords)
            })

        }

    }, [defaultWords, wordsValues])
    return {
        isGame,
        activeWord,
        startGame,
        toBackHandler,
        nextWordHandler
    }
}
export default useController
