export type WordValueType = {
    firstWord: string,
    secondWord: string,
    thirdWord: string,
    transcription: string,

}
export type Word ={
    id: number| string,
    isActive: boolean,
    value: WordValueType

}
