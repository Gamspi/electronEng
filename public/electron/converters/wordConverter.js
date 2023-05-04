class WordConverter {
    static toArray = ({isActive, value: {firstWord, secondWord, thirdWord, transcription}}) => {
        return [isActive, firstWord, secondWord, thirdWord,transcription]
    }
    static toObject = ({id, isActive, oneForm, twoForm, theeForm, transcription}) => {
        return {id, isActive:!!isActive, value: {firstWord:oneForm, secondWord:twoForm, thirdWord:theeForm, transcription}}
    }
}
module.exports = WordConverter
