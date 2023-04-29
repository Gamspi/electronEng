const wordConverter = ({isActive, value: {firstWord, secondWord, thirdWord}}) => {
    return [isActive, firstWord, secondWord, thirdWord]
}
module.exports = wordConverter
