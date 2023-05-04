class WordConverter {
    static toArray = ({isActive, value: {firstWord, secondWord, thirdWord}}) => {
        return [isActive, firstWord, secondWord, thirdWord]
    }
    static toObject = ({id, isActive, oneForm, twoForm, theeForm}) => {
        return {id, isActive:!!isActive, value: {firstWord:oneForm, secondWord:twoForm, thirdWord:theeForm}}
    }
}
module.exports = WordConverter
