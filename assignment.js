let sentence = 'test a jest'

function capitalize(sentence){
    console.log(sentence)
    return sentence[0].toUpperCase() + sentence.slice(1)
}

function reverse(sentence){
    sentence = sentence.split("").reverse().join("")
    return sentence
}



export {
    capitalize,
    reverse
}