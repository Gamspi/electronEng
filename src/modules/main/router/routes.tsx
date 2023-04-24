import React from "react";
import WordsList from "../modules/wordsList/WordsList";
import {WordRoutesEnum} from "./wordRoutesEnum";
import WordsGame from "../modules/wordsGame/WordsGame";

const routes = [
    {
        path: WordRoutesEnum.BASE,
        element: <WordsList/>
    },
    {
        path: WordRoutesEnum.GAME,
        element: <WordsGame/>
    },
]
export default routes

